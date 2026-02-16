import json
from google.adk.agents.llm_agent import Agent
from google.adk.tools.tool_context import ToolContext
from .a2ui_schema import A2UI_SCHEMA


# Eventually you can copy & paste some UI examples here, for few-shot in context learning
FLIGHT_UI_EXAMPLES = """
"""

AGENT_INSTRUCTION = """
You are a helpful flight finding assistant. Your goal is to help users find and book flights using a rich UI.

To achieve this, you MUST follow this logic:

1.  **For finding flights:**
    a. You MUST call the `get_flights` tool. Extract the origin city/airport, destination city/airport, departure date, optional return date, passenger count, cabin class, and a specific number (`count`) of flight options from the user's query (for example, "show top 3 round-trip flights from NYC to SFO on March 1st").
    b. After receiving the data, you MUST follow the instructions precisely to generate the final a2ui UI JSON, using an appropriate UI example from `prompt_builder.py` based on the number of flight options returned.
"""

# Construct the full prompt with UI instructions, examples, and schema
A2UI_AND_AGENT_INSTRUCTION = AGENT_INSTRUCTION + f"""

Your final output MUST be a a2ui UI JSON response.

To generate the response, you MUST follow these rules:
1.  Your response MUST be in two parts, separated by the delimiter: `---a2ui_JSON---`.
2.  The first part is your conversational text response.
3.  The second part is a single, raw JSON object which is a list of A2UI messages.
4.  The JSON part MUST validate against the A2UI JSON SCHEMA provided below.

--- UI TEMPLATE RULES ---
-   If the query is for a list of flights, use the flight data you have already received from the `get_flights` tool to populate the `dataModelUpdate.contents` array (e.g., as a `valueMap` for the "items" key).
-   If the number of flights is 5 or fewer, you MUST use the `SINGLE_COLUMN_LIST_EXAMPLE` template.
-   If the number of flights is more than 5, you MUST use the `TWO_COLUMN_LIST_EXAMPLE` template.
-   If the query is to book a flight (e.g., "USER_WANTS_TO_BOOK..."), you MUST use the `BOOKING_FORM_EXAMPLE` template.
-   If the query is a booking submission (e.g., "User submitted a booking..."), you MUST use the `CONFIRMATION_EXAMPLE` template.

{FLIGHT_UI_EXAMPLES}

---BEGIN A2UI JSON SCHEMA---
{A2UI_SCHEMA}
---END A2UI JSON SCHEMA---
"""

def get_flights(tool_context: ToolContext) -> str:
    """Call this tool to get a list of sample flights between two cities.

    This tool returns a JSON-encoded list of flight objects with keys:
    `airline`, `flightNumber`, `departCity`, `arriveCity`, `departTime`,
    `arriveTime`, `duration`, `stops`, `price`, and `bookingLink`.
    """
    return json.dumps([
        {
            "airline": "Delta Air Lines",
            "flightNumber": "DL 123",
            "departCity": "New York, NY (JFK)",
            "arriveCity": "San Francisco, CA (SFO)",
            "departTime": "2026-03-01T08:00:00",
            "arriveTime": "2026-03-01T11:15:00",
            "duration": "6h 15m",
            "stops": "Nonstop",
            "price": "$320",
            "bookingLink": "https://example.com/book/dl123"
        },
        {
            "airline": "United Airlines",
            "flightNumber": "UA 456",
            "departCity": "New York, NY (EWR)",
            "arriveCity": "San Francisco, CA (SFO)",
            "departTime": "2026-03-01T09:30:00",
            "arriveTime": "2026-03-01T12:50:00",
            "duration": "6h 20m",
            "stops": "Nonstop",
            "price": "$335",
            "bookingLink": "https://example.com/book/ua456"
        },
        {
            "airline": "American Airlines",
            "flightNumber": "AA 789",
            "departCity": "New York, NY (LGA)",
            "arriveCity": "San Francisco, CA (SFO)",
            "departTime": "2026-03-01T07:00:00",
            "arriveTime": "2026-03-01T10:25:00",
            "duration": "6h 25m",
            "stops": "1 stop (Chicago)",
            "price": "$295",
            "bookingLink": "https://example.com/book/aa789"
        },
        {
            "airline": "JetBlue",
            "flightNumber": "B6 321",
            "departCity": "New York, NY (JFK)",
            "arriveCity": "San Francisco, CA (SFO)",
            "departTime": "2026-03-01T11:00:00",
            "arriveTime": "2026-03-01T14:30:00",
            "duration": "6h 30m",
            "stops": "Nonstop",
            "price": "$310",
            "bookingLink": "https://example.com/book/b6321"
        },
    ])


root_agent = Agent(
    model='gemini-2.5-flash',
    name="flight_agent",
    description="An agent that finds flights between two cities and helps book tickets.",
    instruction=A2UI_AND_AGENT_INSTRUCTION,
    tools=[get_flights],
)
