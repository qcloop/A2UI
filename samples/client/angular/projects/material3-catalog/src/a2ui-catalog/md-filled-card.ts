import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/labs/card/filled-card.js';

@Component({
  selector: 'catalog-md-filled-card',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-filled-card
        >
      <ng-content></ng-content>
    </md-filled-card>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdFilledCard extends DynamicComponent {



}
