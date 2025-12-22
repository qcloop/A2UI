import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/progress/circular-progress.js';

@Component({
  selector: 'catalog-md-circular-progress',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-circular-progress
        [value]="resolvedValue()"
        [max]="resolvedMax()"
        [indeterminate]="resolvedIndeterminate()"
        [fourColor]="resolvedFourColor()">
      <ng-content></ng-content>
    </md-circular-progress>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdCircularProgress extends DynamicComponent {
  readonly value = input<Primitives.NumberValue | number | null>(null);
  readonly max = input<Primitives.NumberValue | number | null>(null);
  readonly indeterminate = input<Primitives.BooleanValue | boolean | null>(null);
  readonly fourColor = input<Primitives.BooleanValue | boolean | null>(null);

  protected resolvedValue = computed(() => {
    const v = this.value();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedMax = computed(() => {
    const v = this.max();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedIndeterminate = computed(() => {
    const v = this.indeterminate();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedFourColor = computed(() => {
    const v = this.fourColor();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
