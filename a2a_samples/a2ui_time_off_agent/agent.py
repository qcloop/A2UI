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

import datetime
import json
import logging
import os
from collections.abc import AsyncIterable
from typing import Any

from a2ui_examples import TIME_OFF_UI_EXAMPLES

# Corrected imports from our new/refactored files
from a2ui_schema import A2UI_SCHEMA
from google.adk.models.lite_llm import LiteLlm
from google.adk.agents.llm_agent import LlmAgent
from google.adk.planners.built_in_planner import BuiltInPlanner
from google.genai import types
from prompt_builder import (
    get_text_prompt,
    get_ui_prompt,
)

from tools import get_vacation_balance
from send_a2ui_json_to_client_tool import SendA2uiJsonToClientTool

logger = logging.getLogger(__name__)


class TimeOffAgent:
    """An agent that finds contact info for colleagues."""

    SUPPORTED_CONTENT_TYPES = ["text", "text/plain"]

    @classmethod
    def build_agent(cls, base_url:str, use_ui: bool) -> LlmAgent:
        """Builds the LLM agent for the contact agent."""
        LITELLM_MODEL = os.getenv("LITELLM_MODEL", "gemini-2.5-flash")

        a2ui_tools = []
        if use_ui:
            instruction = get_ui_prompt(base_url, TIME_OFF_UI_EXAMPLES)
            a2ui_tools.append(SendA2uiJsonToClientTool(A2UI_SCHEMA))
        else:
            # The text prompt function also returns a complete prompt.
            instruction = get_text_prompt()

        return LlmAgent(
            model=LiteLlm(model=LITELLM_MODEL),
            name="time_off_agent",
            description="An agent that lets an employee request time off.",
            instruction=instruction,
            tools=[get_vacation_balance] + a2ui_tools,
            planner=BuiltInPlanner(
                thinking_config=types.ThinkingConfig(
                    include_thoughts=True,
                )
            ),
            disallow_transfer_to_peers=True,

        )
