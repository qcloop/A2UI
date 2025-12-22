import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/ripple/ripple.js';

@Component({
  selector: 'catalog-md-ripple',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-ripple
        [disabled]="resolvedDisabled()">
      <ng-content></ng-content>
    </md-ripple>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdRipple extends DynamicComponent {
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);

  protected resolvedDisabled = computed(() => {
    const v = this.disabled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
