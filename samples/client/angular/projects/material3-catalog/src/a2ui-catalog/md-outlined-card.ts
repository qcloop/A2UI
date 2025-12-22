import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/labs/card/outlined-card.js';

@Component({
  selector: 'catalog-md-outlined-card',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-outlined-card
        >
      <ng-content></ng-content>
    </md-outlined-card>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdOutlinedCard extends DynamicComponent {



}
