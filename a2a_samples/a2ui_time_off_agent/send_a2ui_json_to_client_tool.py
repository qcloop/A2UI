import json
import uuid
import jsonschema
import logging
from typing import Any, List, Optional

from a2a import types as a2a_types
from google.genai import types as genai_types

from google.adk.tools.base_tool import BaseTool
from google.adk.tools.tool_context import ToolContext
from google.adk.a2a.converters import part_converter
from a2ui_ext import a2ui_MIME_TYPE
from google.adk.a2a.converters import event_converter
from google.adk.agents.invocation_context import InvocationContext

logger = logging.getLogger(__name__)

class SendA2uiJsonToClientTool(BaseTool):
    TOOL_NAME = "send_a2ui_json_to_client"
    A2UI_JSON_ARG_NAME = "a2ui_json"

    def __init__(self, a2ui_schema: str):
        super().__init__(
            name=self.TOOL_NAME, 
            description="Sends A2UI JSON to the client to render rich UI for the user."                
                        "Args:" 
                        f"    {self.A2UI_JSON_ARG_NAME}: Valid A2UI JSON Schema to send to the client. The A2UI JSON Schema definition is between ---BEGIN A2UI JSON SCHEMA--- and ---END A2UI JSON SCHEMA--- in the system instructions.")
        
        try:
            # First, load the schema for a *single message*
            single_message_schema = json.loads(a2ui_schema)

            # The prompt instructs the LLM to return a *list* of messages.
            # Therefore, our validation schema must be an *array* of the single message schema.
            self.a2ui_schema_object = {"type": "array", "items": single_message_schema}
            logger.info("A2UI_SCHEMA successfully loaded.")
        except json.JSONDecodeError as e:
            logger.error(f"CRITICAL: Failed to parse A2UI_SCHEMA: {e}")
            raise e

    def _get_declaration(self) -> genai_types.FunctionDeclaration | None:
        return genai_types.FunctionDeclaration(
            name=self.name,
            description=self.description,
            parameters=genai_types.Schema(
                type=genai_types.Type.OBJECT,
                properties={
                    self.A2UI_JSON_ARG_NAME: genai_types.Schema(
                        type=genai_types.Type.STRING,
                        description="valid A2UI JSON Schema to send to the client.",
                    ),
                },
                required=[self.A2UI_JSON_ARG_NAME],
            ),
        )
    
    async def run_async(
        self, *, args: dict[str, Any], tool_context: ToolContext
    ) -> Any:
        a2ui_json = args.get("a2ui_json")
        if not a2ui_json:
            raise ValueError("Failed to call tool send_a2ui_json_to_client: missing required arg a2ui_json ")
        
        a2ui_json_payload = json.loads(a2ui_json)
        jsonschema.validate(
            instance=a2ui_json_payload, schema=self.a2ui_schema_object
        )

        # Don't do a second LLM inference call for the None response
        tool_context.actions.skip_summarization = True
        
        return None
    
