import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/labs/segmentedbuttonset/outlined-segmented-button-set.js';

@Component({
  selector: 'catalog-md-outlined-segmented-button-set',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-outlined-segmented-button-set
        [multiselect]="resolvedMultiselect()"
        [buttons]="resolvedButtons()">
      <ng-content></ng-content>
    </md-outlined-segmented-button-set>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdOutlinedSegmentedButtonSet extends DynamicComponent {
  readonly multiselect = input<Primitives.BooleanValue | boolean | null>(null);
  readonly buttons = input<Primitives.StringValue | string | null>(null);

  protected resolvedMultiselect = computed(() => {
    const v = this.multiselect();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedButtons = computed(() => {
    const v = this.buttons();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
}
