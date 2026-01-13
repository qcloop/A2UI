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

import assert from "node:assert";
import { describe, it } from "node:test";
import { A2uiMessageProcessor } from "./data/model-processor.js";
import { AnyComponentNode } from "./types/types.js";

// Helper to strip reactivity
const toPlainObject = (value: unknown): any => {
  return JSON.parse(JSON.stringify(value));
};

describe("McpUi Component Integration", () => {
  const processor = new A2uiMessageProcessor();

  it("should parse McpUi component correctly", () => {
    processor.processMessages([
      {
        beginRendering: {
          root: "root",
          surfaceId: "@default",
        },
      },
      {
        surfaceUpdate: {
          surfaceId: "@default",
          components: [
            {
              id: "root",
              component: {
                McpUi: {
                  resource: {
                    uri: "ui://test",
                    mimeType: "text/html",
                    text: "<div>Hello</div>",
                  },
                },
              },
            },
          ],
        },
      },
    ]);

    const surface = processor.getSurfaces().get("@default");
    const tree = surface?.componentTree as AnyComponentNode;
    
    assert.ok(tree, "Tree should exist");
    assert.strictEqual(tree.type, "McpUi");
    // @ts-ignore
    assert.strictEqual(tree.properties.resource.uri, "ui://test");
    // @ts-ignore
    assert.strictEqual(tree.properties.resource.mimeType, "text/html");
  });
});
