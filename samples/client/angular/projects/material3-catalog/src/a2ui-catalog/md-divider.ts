import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/divider/divider.js';

@Component({
  selector: 'catalog-md-divider',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-divider
        [inset]="resolvedInset()"
        [insetStart]="resolvedInsetStart()"
        [insetEnd]="resolvedInsetEnd()">
      <ng-content></ng-content>
    </md-divider>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdDivider extends DynamicComponent {
  readonly inset = input<Primitives.BooleanValue | boolean | null>(null);
  readonly insetStart = input<Primitives.BooleanValue | boolean | null>(null);
  readonly insetEnd = input<Primitives.BooleanValue | boolean | null>(null);

  protected resolvedInset = computed(() => {
    const v = this.inset();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedInsetStart = computed(() => {
    const v = this.insetStart();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedInsetEnd = computed(() => {
    const v = this.insetEnd();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
