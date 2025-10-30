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
from google.adk.a2a.converters.part_converter import GenAIPartToA2APartConverter
from google.adk.agents.invocation_context import InvocationContext
from send_a2ui_json_to_client_tool import SendA2uiJsonToClientTool

logger = logging.getLogger(__name__)

def convert_genai_part_to_a2a_part(part: genai_types.Part) -> List[a2a_types.Part]:
    if (function_call := part.function_call) and function_call.name == SendA2uiJsonToClientTool.TOOL_NAME:
        a2ui_json = function_call.args.get(SendA2uiJsonToClientTool.A2UI_JSON_ARG_NAME)
        if a2ui_json is None:
            raise ValueError(f"convert_genai_part_to_a2a_part: Failed to convert A2UI function call because required arg {SendA2uiJsonToClientTool.A2UI_JSON_ARG_NAME} not found in {str(part)}")
        if not a2ui_json.strip():
            logger.info("convert_genai_part_to_a2a_part: empty a2ui_json, skipping")
            return []
        
        logger.info("convert_genai_part_to_a2a_part: converting a2ui json: {a2ui_json}")

        json_data = json.loads(a2ui_json)
        
        # Don't need to validate since JSON was already validated by the tool

        final_parts = []
        if isinstance(json_data, list):
            logger.info( f"Found {len(json_data)} messages. Creating individual DataParts." )
            for message in json_data:
                final_parts.append(
                    a2a_types.Part(
                        root=a2a_types.DataPart(
                            data=message,
                            mime_type=a2ui_MIME_TYPE,
                        )
                    )
                )
        else:
            # Handle the case where a single JSON object is returned
            logger.info( "Received a single JSON object. Creating a DataPart." )
            final_parts.append(
                a2a_types.Part(
                    root=a2a_types.DataPart(
                        data=json_data,
                        mime_type=a2ui_MIME_TYPE,
                    )
                )
            )
        
        return final_parts

    # Don't send a2ui tool responses
    elif (function_response := part.function_response) and function_response.name == SendA2uiJsonToClientTool.TOOL_NAME:    
        return []
    
    # Use default part converter for other types (images, etc)
    converted_part = part_converter.convert_genai_part_to_a2a_part(part)
    return [converted_part] if converted_part else []

#
# Temporary until part converters that can return multiple parts are submitted
#
def convert_event_to_a2a_message(
    event: genai_types.Event,
    invocation_context: InvocationContext,
    role: a2a_types.Role = a2a_types.Role.agent,
) -> Optional[a2a_types.Message]:
  """Converts an ADK event to an A2A message.

  Args:
    event: The ADK event to convert.
    invocation_context: The invocation context.
    role: The role of the message.

  Returns:
    An A2A Message if the event has content, None otherwise.

  Raises:
    ValueError: If required parameters are invalid.
  """
  if not event:
    raise ValueError("Event cannot be None")
  if not invocation_context:
    raise ValueError("Invocation context cannot be None")

  if not event.content or not event.content.parts:
    return None

  try:
    a2a_parts = []
    for part in event.content.parts:
      for a2a_part in convert_genai_part_to_a2a_part(part):      
        if a2a_part:
            a2a_parts.append(a2a_part)
            event_converter._process_long_running_tool(a2a_part, event)

    if a2a_parts:
      return a2a_types.Message(message_id=str(uuid.uuid4()), role=role, parts=a2a_parts)

  except Exception as e:
    logger.error("Failed to convert event to status message: %s", e)
    raise

  return None

#
# Temporary until part converters that can return multiple parts are submitted
#
def convert_event_to_a2a_events(
    event: genai_types.Event,
    invocation_context: InvocationContext,
    task_id: Optional[str] = None,
    context_id: Optional[str] = None,    
    # Ignored, using our own that can return multiple parts
    part_converter: GenAIPartToA2APartConverter = convert_genai_part_to_a2a_part, 
) -> List[a2a_types.A2AEvent]:
  """Converts a GenAI event to a list of A2A events.

  Args:
    event: The ADK event to convert.
    invocation_context: The invocation context.
    task_id: Optional task ID to use for generated events.
    context_id: Optional Context ID to use for generated events.

  Returns:
    A list of A2A events representing the converted ADK event.

  Raises:
    ValueError: If required parameters are invalid.
  """
  if not event:
    raise ValueError("Event cannot be None")
  if not invocation_context:
    raise ValueError("Invocation context cannot be None")

  a2a_events = []

  try:

    # Handle error scenarios
    if event.error_code:
      error_event = event_converter._create_error_status_event(
          event, invocation_context, task_id, context_id
      )
      a2a_events.append(error_event)

    # Handle regular message content
    message = convert_event_to_a2a_message(
        event, invocation_context
    )
    if message:
      running_event = event_converter._create_status_update_event(
          message, invocation_context, event, task_id, context_id
      )
      a2a_events.append(running_event)

  except Exception as e:
    logger.error("Failed to convert event to A2A events: %s", e)
    raise

  return a2a_events