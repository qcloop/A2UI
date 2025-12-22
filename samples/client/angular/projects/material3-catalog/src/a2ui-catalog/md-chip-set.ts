import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/chips/chip-set.js';

@Component({
  selector: 'catalog-md-chip-set',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-chip-set
        >
      <ng-content></ng-content>
    </md-chip-set>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdChipSet extends DynamicComponent {



}
