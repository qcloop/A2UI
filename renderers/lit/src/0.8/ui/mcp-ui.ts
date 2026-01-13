/*
 Copyright 2025 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import { html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Root } from "./root.js";
import { McpUi as McpUiComponent } from "../types/components.js";
import { structuralStyles } from "./styles.js";
import "@mcp-ui/client/ui-resource-renderer.wc.js";

@customElement("a2ui-mcp-ui")
export class McpUi extends Root {
  @property()
  accessor resource: McpUiComponent["resource"] | null = null;

  static styles = [
    structuralStyles,
    css`
      :host {
        display: block;
        min-height: 0;
        flex: var(--weight);
      }
      
      ui-resource-renderer {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ];

  render() {
    if (!this.resource) {
      return nothing;
    }

    return html`
      <ui-resource-renderer
        resource=${JSON.stringify(this.resource)}
      ></ui-resource-renderer>
    `;
  }
}
