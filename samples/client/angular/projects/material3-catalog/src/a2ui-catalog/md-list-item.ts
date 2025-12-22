import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/list/list-item.js';

@Component({
  selector: 'catalog-md-list-item',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-list-item
        >
      <ng-content></ng-content>
    </md-list-item>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdListItem extends DynamicComponent {



}
