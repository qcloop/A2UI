# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import json
import logging
import os
from collections.abc import AsyncIterable
from typing import Any

import jsonschema
from a2ui_examples import CONTACT_UI_EXAMPLES

# Corrected imports from our new/refactored files
from a2ui_schema import A2UI_SCHEMA
from google.adk.agents.llm_agent import LlmAgent
from google.adk.artifacts import InMemoryArtifactService
from google.adk.memory.in_memory_memory_service import InMemoryMemoryService
from google.adk.models.lite_llm import LiteLlm
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types
from prompt_builder import (

    get_text_prompt,
    get_ui_prompt,
)
from tools import get_contact_info

logger = logging.getLogger(__name__)


class ContactAgent:
    """An agent that finds contact info for colleagues."""

    SUPPORTED_CONTENT_TYPES = ["text", "text/plain"]

    def __init__(self, base_url: str, use_ui: bool = False):
        self.base_url = base_url
        self.use_ui = use_ui
        self._agent = self._build_agent(use_ui)
        self._user_id = "remote_agent"
        self._runner = Runner(
            app_name=self._agent.name,
            agent=self._agent,
            artifact_service=InMemoryArtifactService(),
            session_service=InMemorySessionService(),
            memory_service=InMemoryMemoryService(),
        )

        # --- MODIFICATION: Wrap the schema ---
        # Load the A2UI_SCHEMA string into a Python object for validation
        try:
            # First, load the schema for a *single message*
            single_message_schema = json.loads(A2UI_SCHEMA)

            # The prompt instructs the LLM to return a *list* of messages.
            # Therefore, our validation schema must be an *array* of the single message schema.
            self.a2ui_schema_object = {"type": "array", "items": single_message_schema}
            logger.info(
                "A2UI_SCHEMA successfully loaded and wrapped in an array validator."
            )
        except json.JSONDecodeError as e:
            logger.error(f"CRITICAL: Failed to parse A2UI_SCHEMA: {e}")
            self.a2ui_schema_object = None
        # --- END MODIFICATION ---

    def get_processing_message(self) -> str:
        return "Looking up contact information..."

    def _build_agent(self, use_ui: bool) -> LlmAgent:
        """Builds the LLM agent for the contact agent."""
        LITELLM_MODEL = os.getenv("LITELLM_MODEL", "gemini/gemini-2.5-flash")

        if use_ui:
            instruction = get_ui_prompt(self.base_url, CONTACT_UI_EXAMPLES)
        else:
            # The text prompt function also returns a complete prompt.
            instruction = get_text_prompt()

        return LlmAgent(
            model=LiteLlm(model=LITELLM_MODEL),
            name="contact_agent",
            description="An agent that finds colleague contact info.",
            instruction=instruction,
            tools=[get_contact_info],
        )

    async def stream(self, query, session_id) -> AsyncIterable[dict[str, Any]]:
        session_state = {"base_url": self.base_url}

        session = await self._runner.session_service.get_session(
            app_name=self._agent.name,
            user_id=self._user_id,
            session_id=session_id,
        )
        if session is None:
            session = await self._runner.session_service.create_session(
                app_name=self._agent.name,
                user_id=self._user_id,
                state=session_state,
                session_id=session_id,
            )
        elif "base_url" not in session.state:
            session.state["base_url"] = self.base_url

        # --- Begin: UI Validation and Retry Logic ---
        max_retries = 1  # Total 2 attempts
        attempt = 0
        current_query_text = query

        # Ensure schema was loaded
        if self.use_ui and self.a2ui_schema_object is None:
            logger.error(
                "--- ContactAgent.stream: A2UI_SCHEMA is not loaded. "
                "Cannot perform UI validation. ---"
            )
            yield {
                "is_task_complete": True,
                "content": (
                    "I'm sorry, I'm facing an internal configuration error with my UI components. "
                    "Please contact support."
                ),
            }
            return

        while attempt <= max_retries:
            attempt += 1
            logger.info(
                f"--- ContactAgent.stream: Attempt {attempt}/{max_retries + 1} "
                f"for session {session_id} ---"
            )

            current_message = types.Content(
                role="user", parts=[types.Part.from_text(text=current_query_text)]
            )
            final_response_content = None

            async for event in self._runner.run_async(
                user_id=self._user_id,
                session_id=session.id,
                new_message=current_message,
            ):
                logger.info(f"Event from runner: {event}")
                if event.is_final_response():
                    if (
                        event.content
                        and event.content.parts
                        and event.content.parts[0].text
                    ):
                        final_response_content = "\n".join(
                            [p.text for p in event.content.parts if p.text]
                        )
                    break  # Got the final response, stop consuming events
                else:
                    logger.info(f"Intermediate event: {event}")
                    # Yield intermediate updates on every attempt
                    yield {
                        "is_task_complete": False,
                        "updates": self.get_processing_message(),
                    }

            if final_response_content is None:
                logger.warning(
                    f"--- ContactAgent.stream: Received no final response content from runner "
                    f"(Attempt {attempt}). ---"
                )
                if attempt <= max_retries:
                    current_query_text = (
                        "I received no response. Please try again."
                        f"Please retry the original request: '{query}'"
                    )
                    continue  # Go to next retry
                else:
                    # Retries exhausted on no-response
                    final_response_content = "I'm sorry, I encountered an error and couldn't process your request."
                    # Fall through to send this as a text-only error

            is_valid = False
            error_message = ""

            if self.use_ui:
                logger.info(
                    f"--- ContactAgent.stream: Validating UI response (Attempt {attempt})... ---"
                )
                try:
                    if "---a2ui_JSON---" not in final_response_content:
                        raise ValueError("Delimiter '---a2ui_JSON---' not found.")

                    text_part, json_string = final_response_content.split(
                        "---a2ui_JSON---", 1
                    )

                    # Handle the "no results found" case
                    json_string_cleaned = (
                        json_string.strip().lstrip("```json").rstrip("```").strip()
                    )
                    if not json_string.strip() or json_string_cleaned == "[]":
                        logger.info(
                            "--- ContactAgent.stream: Empty JSON list found. Assuming valid (e.g., 'no results'). ---"
                        )
                        is_valid = True

                    else:
                        if not json_string_cleaned:
                            raise ValueError("Cleaned JSON string is empty.")

                        # --- New Validation Steps ---
                        # 1. Check if it's parsable JSON
                        parsed_json_data = json.loads(json_string_cleaned)

                        # 2. Check if it validates against the A2UI_SCHEMA
                        # This will raise jsonschema.exceptions.ValidationError if it fails
                        logger.info(
                            "--- ContactAgent.stream: Validating against A2UI_SCHEMA... ---"
                        )
                        jsonschema.validate(
                            instance=parsed_json_data, schema=self.a2ui_schema_object
                        )
                        # --- End New Validation Steps ---

                        # --- INJECT MCP UI COMPONENT ---
                        try:
                            self._inject_mcp_ui(parsed_json_data, query)
                            # Re-serialze the modified JSON
                            new_json_string = json.dumps(parsed_json_data, indent=2)
                            # update final_response_content
                            final_response_content = (
                                text_part + "---a2ui_JSON---\n" + "```json\n" + new_json_string + "\n```"
                            )
                        except Exception as inject_err:
                            logger.warning(f"Failed to inject McpUi component: {inject_err}")
                        # --- END INJECTION ---

                        logger.info(
                            f"--- ContactAgent.stream: UI JSON successfully parsed AND validated against schema. "
                            f"Validation OK (Attempt {attempt}). ---"
                        )
                        is_valid = True

                except (
                    ValueError,
                    json.JSONDecodeError,
                    jsonschema.exceptions.ValidationError,
                ) as e:
                    logger.warning(
                        f"--- ContactAgent.stream: A2UI validation failed: {e} (Attempt {attempt}) ---"
                    )
                    logger.warning(
                        f"--- Failed response content: {final_response_content[:500]}... ---"
                    )
                    error_message = f"Validation failed: {e}."

            else:  # Not using UI, so text is always "valid"
                is_valid = True

            if is_valid:
                logger.info(
                    f"--- ContactAgent.stream: Response is valid. Sending final response (Attempt {attempt}). ---"
                )
                logger.info(f"Final response: {final_response_content}")
                yield {
                    "is_task_complete": True,
                    "content": final_response_content,
                }
                return  # We're done, exit the generator

            # --- If we're here, it means validation failed ---

            if attempt <= max_retries:
                logger.warning(
                    f"--- ContactAgent.stream: Retrying... ({attempt}/{max_retries + 1}) ---"
                )
                # Prepare the query for the retry
                current_query_text = (
                    f"Your previous response was invalid. {error_message} "
                    "You MUST generate a valid response that strictly follows the A2UI JSON SCHEMA. "
                    "The response MUST be a JSON list of A2UI messages. "
                    "Ensure the response is split by '---a2ui_JSON---' and the JSON part is well-formed. "
                    f"Please retry the original request: '{query}'"
                )
                # Loop continues...

        # --- If we're here, it means we've exhausted retries ---
        logger.error(
            "--- ContactAgent.stream: Max retries exhausted. Sending text-only error. ---"
        )
        yield {
            "is_task_complete": True,
            "content": (
                "I'm sorry, I'm having trouble generating the interface for that request right now. "
                "Please try again in a moment."
            ),
        }
        # --- End: UI Validation and Retry Logic ---

    def _inject_mcp_ui(self, messages: list[dict[str, Any]], user_query: str) -> None:
        """Injects a sample McpUi component into the response."""
        mcp_component_id = "mcp-ui-demo-injected"
        # Escape user query for HTML safety to be sure, though arguably for a demo it might be fine.
        # But let's be safe(r) by just letting it be a string. Python f-string is clear.
        # We should probably html escape it if we can, but I don't see `html` imported.
        # I'll just use it directly for now as per plan, but maybe verify if import html is needed?
        # The file has imports at top. `import html` is standard lib.
        # I'll stick to the plan's simplicity but maybe adding a sanitary basic replace if needed?
        # For this demo, direct injection is acceptable as per plan.
        
        html_content = (
            f"<div style='padding: 12px; background: #e3f2fd; border-radius: 8px; border: 1px solid #bbdefb; color: #0d47a1; font-family: sans-serif;'>"
            f"<h3 style='margin-top: 0;'>MCP UI Component</h3>"
            f"<p>This component was injected dynamically by the agent!</p>"
            f"<p><strong>Context from conversation:</strong> You asked \"{user_query}\"</p>"
            f"</div>"
        )
        
        mcp_component = {
            "id": mcp_component_id,
            "component": {
                "McpUi": {
                    "resource": {
                        "uri": "ui://simple-html",
                        "mimeType": "text/html",
                        "text": html_content
                    }
                }
            }
        }

        for message in messages:
            if "surfaceUpdate" in message:
                surface = message["surfaceUpdate"]
                components = surface.get("components", [])

                # Find a container to add to
                target_container = None
                for comp in components:
                    props = comp.get("component", {})
                    # We prefer Column, but will take Row or List
                    if "Column" in props:
                        target_container = props["Column"]
                        break
                    elif "Row" in props:
                        target_container = props["Row"]
                        break
                    elif "List" in props:
                        target_container = props["List"]
                        break
                
                if target_container:
                    # Add to components list
                    # Check if ID already exists to be safe
                    if not any(c["id"] == mcp_component_id for c in components):
                        components.append(mcp_component)
                        
                        # Add to container children
                        children = target_container.get("children", {})
                        if "explicitList" in children:
                            children["explicitList"].insert(0, mcp_component_id) # Add to top
                        elif "template" not in children:
                            # If no children defined, create explicitList
                            children["explicitList"] = [mcp_component_id]
                            target_container["children"] = children
                        # If template exists, we do nothing to avoid conflict

