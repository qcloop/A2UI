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

import logging
import os
import traceback
import click
from a2a.server.apps import A2AStarletteApplication
from a2a.server.request_handlers import DefaultRequestHandler
from a2a.server.tasks import InMemoryTaskStore
from a2a.types import AgentCapabilities, AgentCard, AgentSkill
from a2ui_ext import a2uiExtension
from agent import TimeOffAgent
from agent_executor import TimeOffAgentExecutor
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class MissingAPIKeyError(Exception):
    """Exception for missing API key."""


@click.command()
@click.option("--host", default="localhost")
@click.option("--port", default=10002)
def main(host, port):
    try:
        # Check for API key only if Vertex AI is not configured
        if not os.getenv("GOOGLE_GENAI_USE_VERTEXAI") == "TRUE":
            if not os.getenv("GEMINI_API_KEY"):
                raise MissingAPIKeyError(
                    "GEMINI_API_KEY environment variable not set and GOOGLE_GENAI_USE_VERTEXAI is not TRUE."
                )

        hello_ext = a2uiExtension()
        capabilities = AgentCapabilities(
            streaming=True,
            extensions=[
                hello_ext.agent_extension(),
            ],
        )
        request_time_off_skill = AgentSkill(
            id="request_time_off",
            name="Request Time Off",
            description="Lets you request time off.",
            tags=["vacation", "request"],
            examples=["Request 8 hours of vacation time off on October 29, 2025"],
        )
        view_vacation_balance_skill = AgentSkill(
            id="view_vacation_balance",
            name="View Vacation Balance",
            description="Lets you view your vacation balance.",
            tags=["vacation", "balance"],
            examples=["What is my vacation balance?"],
        )

        base_url = f"http://{host}:{port}"

        agent_card = AgentCard(
            name="Contact Lookup Agent",
            description="This agent lets you request time off and see your vacation balance.",
            url=base_url,  # <-- Use base_url here
            version="1.0.0",
            default_input_modes=TimeOffAgent.SUPPORTED_CONTENT_TYPES,
            default_output_modes=TimeOffAgent.SUPPORTED_CONTENT_TYPES,
            capabilities=capabilities,
            skills=[request_time_off_skill, view_vacation_balance_skill],
        )

        agent_executor = TimeOffAgentExecutor(base_url=base_url)

        agent_executor = hello_ext.wrap_executor(agent_executor)

        request_handler = DefaultRequestHandler(
            agent_executor=agent_executor,
            task_store=InMemoryTaskStore(),
        )
        server = A2AStarletteApplication(
            agent_card=agent_card, http_handler=request_handler
        )
        import uvicorn

        app = server.build()

        app.add_middleware(
            CORSMiddleware,
            allow_origins=["http://localhost:5173"],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

        uvicorn.run(app, host=host, port=port)
    except MissingAPIKeyError as e:
        logger.error(f"Error: {e} {traceback.format_exc()}")
        exit(1)
    except Exception as e:
        logger.error(f"An error occurred during server startup: {e} {traceback.format_exc()}")
        exit(1)


if __name__ == "__main__":
    main()
