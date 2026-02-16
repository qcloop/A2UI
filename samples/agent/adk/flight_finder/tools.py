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

from google.adk.tools.tool_context import ToolContext

logger = logging.getLogger(__name__)


def get_flights(
    origin: str,
    destination: str,
    departure_date: str,
    tool_context: ToolContext,
    return_date: str = "",
    passengers: int = 1,
    cabin_class: str = "economy",
    count: int = 5,
) -> str:
  """Call this tool to get a list of flights based on search criteria.

  Args:
      origin: Origin city/airport (e.g., "New York", "JFK")
      destination: Destination city/airport (e.g., "San Francisco", "SFO")
      departure_date: Departure date in ISO format (e.g., "2026-03-01")
      tool_context: Context containing session state
      return_date: Optional return date for round-trip flights
      passengers: Number of passengers (default: 1)
      cabin_class: Cabin class (economy/business/first, default: economy)
      count: Number of flight results to return (default: 5)

  Returns:
      JSON-encoded list of flight objects with keys: airline, flightNumber,
      departCity, arriveCity, departTime, arriveTime, duration, stops, price,
      bookingLink, imageUrl.
  """
  logger.info(f"--- TOOL CALLED: get_flights (count: {count}) ---")
  logger.info(f"  - Origin: {origin}")
  logger.info(f"  - Destination: {destination}")
  logger.info(f"  - Departure date: {departure_date}")
  logger.info(f"  - Return date: {return_date}")
  logger.info(f"  - Passengers: {passengers}")
  logger.info(f"  - Cabin class: {cabin_class}")

  items = []
  try:
    script_dir = os.path.dirname(__file__)
    file_path = os.path.join(script_dir, "flight_data.json")
    with open(file_path) as f:
      flight_data_str = f.read()
      if base_url := tool_context.state.get("base_url"):
        flight_data_str = flight_data_str.replace(
            "http://localhost:10003", base_url
        )
        logger.info(f"Updated base URL from tool context: {base_url}")
      all_items = json.loads(flight_data_str)

    # Slice the list to return only the requested number of items
    items = all_items[:count]
    logger.info(
        f"  - Success: Found {len(all_items)} flights, returning {len(items)}."
    )

  except FileNotFoundError:
    logger.error(f"  - Error: flight_data.json not found at {file_path}")
  except json.JSONDecodeError:
    logger.error(f"  - Error: Failed to decode JSON from {file_path}")

  return json.dumps(items)
