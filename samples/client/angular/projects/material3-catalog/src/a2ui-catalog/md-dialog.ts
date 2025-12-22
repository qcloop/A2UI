import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/dialog/dialog.js';

@Component({
  selector: 'catalog-md-dialog',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-dialog
        [quick]="resolvedQuick()"
        [returnValue]="resolvedReturnValue()"
        [type]="resolvedType()"
        [noFocusTrap]="resolvedNoFocusTrap()">
      <ng-content></ng-content>
    </md-dialog>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdDialog extends DynamicComponent {
  readonly quick = input<Primitives.BooleanValue | boolean | null>(null);
  readonly returnValue = input<Primitives.StringValue | string | null>(null);
  readonly type = input<Primitives.StringValue | string | null>(null);
  readonly noFocusTrap = input<Primitives.BooleanValue | boolean | null>(null);

  protected resolvedQuick = computed(() => {
    const v = this.quick();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedReturnValue = computed(() => {
    const v = this.returnValue();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedType = computed(() => {
    const v = this.type();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedNoFocusTrap = computed(() => {
    const v = this.noFocusTrap();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
