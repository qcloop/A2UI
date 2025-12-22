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

import { Component, ElementRef, ViewChild } from '@angular/core';
import { Surface } from '@a2ui/angular';
import * as v0_8 from '@a2ui/lit/0.8';
import componentsData from './components.json';

@Component({
  selector: 'app-library',
  imports: [Surface],
  templateUrl: './library.html',
  styleUrl: './library.css',
})
export class LibraryComponent {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  selectedBlock: { name: string; surface: v0_8.Types.Surface } | null = null;
  activeSection = '';
  showJsonId: string | null = null;

  openDialog(block: { name: string; surface: v0_8.Types.Surface }) {
    this.selectedBlock = block;
    this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }

  onDialogClick(event: MouseEvent) {
    if (event.target === this.dialog.nativeElement) {
      this.closeDialog();
    }
  }

  scrollTo(name: string) {
    this.activeSection = name;
    const element = document.getElementById('section-' + name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onScroll(event: Event) {
    const container = event.target as HTMLElement;
    const sections = container.querySelectorAll('.component-section');
    let current = '';
    const containerTop = container.scrollTop;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop - container.offsetTop;
      if (sectionTop <= containerTop + 100) {
        const id = section.getAttribute('id');
        if (id) current = id.replace('section-', '');
      }
    }
    if (current && current !== this.activeSection) {
      this.activeSection = current;
    }
  }

  toggleJson(name: string) {
    this.showJsonId = this.showJsonId === name ? null : name;
  }

  getJson(surface: v0_8.Types.Surface): string {
    return JSON.stringify(
      surface,
      (key, value) => {
        if (key === 'rootComponentId' || key === 'dataModel' || key === 'styles') return undefined;
        if (value instanceof Map) return Object.fromEntries(value.entries());
        return value;
      },
      2,
    );
  }

  blocks = (componentsData as any[]).map((data) => ({
    name: data.name,
    tag: data.tag,
    surface: this.createSurfaceFromData(data),
  }));

  private createSurfaceFromData(data: any): v0_8.Types.Surface {
    const rootId = 'root';
    const componentMap = new Map<string, any>();

    // If there are additional children definitions (for nested structures like Row/Column), load them
    if (data.children_definitions) {
      for (const child of data.children_definitions) {
        // Ensure ID exists
        const childId = child.id || ('generated-' + Math.random().toString(36).substr(2, 9));
        componentMap.set(childId, {
          id: childId,
          type: child.type,
          properties: child.properties || {}
        });
      }
    }

    return {
      rootComponentId: rootId,
      dataModel: new Map(),
      styles: {},
      componentTree: {
        id: rootId,
        type: data.type,
        properties: data.properties,
      } as any,
      components: componentMap,
    };
  }
}
