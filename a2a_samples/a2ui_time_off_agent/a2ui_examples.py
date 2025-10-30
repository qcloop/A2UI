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

# a2ui_examples.py

TIME_OFF_UI_EXAMPLES = """
---BEGIN VACATION_FORM_EXAMPLE---
[
  { "beginRendering": { "surfaceId": "vacation-form", "root": "root-column", "styles": { "primaryColor": "#005CB1", "font": "Roboto" } } },
  {
    "surfaceUpdate": {
      "surfaceId": "vacation-form",
      "components": [
        { "id": "root-column", "component": { "Column": { "children": { "explicitList": [ "title-heading", "balance-text", "date-row", "quantity-type-row", "comment-field", "disclaimer-row", "submit-button" ] } } } },
        { "id": "title-heading", "component": { "Heading": { "level": "1", "text": { "path": "form_title" } } } },
        { "id": "balance-text", "component": { "Text": { "text": { "path": "form_balanceText" } } } },
        { "id": "date-row", "component": { "Row": { "children": { "explicitList": [ "start-date-field", "end-date-field" ] }, "distribution": "spaceAround" } } },
        { "id": "start-date-field", "component": { "DateTimeInput": { "value": { "path": "form_startDate" }, "enableDate": true, "enableTime": false } } },
        { "id": "end-date-field", "component": { "DateTimeInput": { "value": { "path": "form_endDate" }, "enableDate": true, "enableTime": false } } },
        { "id": "quantity-type-row", "component": { "Row": { "children": { "explicitList": [ "quantity-field", "type-field" ] }, "distribution": "spaceAround" } } },
        { "id": "quantity-field", "component": { "TextField": { "label": { "literalString": "Daily quantity (Hours)*" }, "text": { "path": "form_dailyQuantity" }, "textFieldType": "number" } } },
        { "id": "type-field", "component": { "TextField": { "label": { "literalString": "Type" }, "text": { "path": "form_type" }, "textFieldType": "shortText" } } },
        { "id": "comment-field", "component": { "TextField": { "label": { "literalString": "Comment (Optional)" }, "text": { "path": "form_comment" }, "textFieldType": "longText" } } },
        { "id": "disclaimer-row", "component": { "Row": { "children": { "explicitList": [ "disclaimer-icon", "disclaimer-text" ] }, "alignment": "center" } } },
        { "id": "disclaimer-icon", "component": { "Image": { "url": { "path": "disclaimer_iconUrl" } } } },
        { "id": "disclaimer-text", "component": { "Text": { "text": { "path": "disclaimer_text" } } } },
        {
          "id": "submit-button",
          "component": {
            "Button": {
              "child": "submit-button-text",
              "action": {
                "name": "submit_vacation_request",
                "context": [
                  { "key": "startDate", "value": { "path": "form_startDate" } },
                  { "key": "endDate", "value": { "path": "form_endDate" } },
                  { "key": "dailyQuantity", "value": { "path": "form_dailyQuantity" } },
                  { "key": "type", "value": { "path": "form_type" } },
                  { "key": "comment", "value": { "path": "form_comment" } }
                ]
              }
            }
          }
        },
        { "id": "submit-button-text", "component": { "Text": { "text": { "literalString": "Submit" } } } }
      ]
    }
  },
  {
    "dataModelUpdate": {
      "surfaceId": "vacation-form",
      "path": "/",
      "contents": [
        { "key": "form_title", "valueString": "Book vacation" },
        { "key": "form_balanceText", "valueString": "Vacation balance as of today: -33.28 hours (-4.16 days based on an 8-hour work day)" },
        { "key": "form_startDate", "valueString": "10/28/2025" },
        { "key": "form_endDate", "valueString": "10/28/2025" },
        { "key": "form_dailyQuantity", "valueString": "8" },
        { "key": "form_type", "valueString": "Vacation" },
        { "key": "form_comment", "valueString": "" },
        { "key": "disclaimer_iconUrl", "valueString": "https://www.gstatic.com/images/icons/material/system/2x/security_grey600_24dp.png" },
        { "key": "disclaimer_text", "valueString": "By submitting, you agree to let Time Off Agent change your vacation time off." }
      ]
    }
  }
]
---END VACATION_FORM_EXAMPLE---

---BEGIN VACATION_BALANCE_EXAMPLE---
[
  { "beginRendering": { "surfaceId": "vacation-balance", "root": "root-column", "styles": { "primaryColor": "#005CB9" } } },
  {
    "surfaceUpdate": {
      "surfaceId": "vacation-balance",
      "components": [
        { "id": "root-column", "component": { "Column": { "children": { "explicitList": [ "title-heading", "balance-card" ] } } } },
        { "id": "title-heading", "component": { "Heading": { "level": "2", "text": { "path": "balanceDate" } } } },
        { "id": "balance-card", "component": { "Card": { "child": "balance-details-column" } } },
        { "id": "balance-details-column", "component": { "Column": { "children": { "explicitList": [ "hours-balance", "days-balance" ] }, "alignment": "center" } } },
        { "id": "hours-balance", "component": { "Heading": { "level": "3", "text": { "path": "hoursBalanceText" } } } },
        { "id": "days-balance", "component": { "Text": { "text": { "path": "daysBalanceText" } } } }
      ]
    }
  },
  {
    "dataModelUpdate": {
      "surfaceId": "vacation-balance",
      "path": "/",
      "contents": [
        { "key": "balanceDate", "valueString": "Vacation balance as of October 29, 2025" },
        { "key": "hoursBalanceText", "valueString": "-33.28 hours" },
        { "key": "daysBalanceText", "valueString": "~4.16 days (based on an 8-hour work day)" }
      ]
    }
  }
]
---END VACATION_BALANCE_EXAMPLE---
"""
