import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/select/select-option.js';

@Component({
  selector: 'catalog-md-select-option',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-select-option
        [delegatesFocus]="resolvedDelegatesFocus()"
        [mode]="resolvedMode()"
        [serializable]="resolvedSerializable()"
        [slotAssignment]="resolvedSlotAssignment()"
        [disabled]="resolvedDisabled()"
        [isMenuItem]="resolvedIsMenuItem()"
        [selected]="resolvedSelected()"
        [value]="resolvedValue()"
        [type]="resolvedType()">
      <ng-content></ng-content>
    </md-select-option>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdSelectOption extends DynamicComponent {
  readonly delegatesFocus = input<Primitives.BooleanValue | boolean | null>(null);
  readonly mode = input<Primitives.StringValue | string | null>(null);
  readonly serializable = input<Primitives.BooleanValue | boolean | null>(null);
  readonly slotAssignment = input<Primitives.StringValue | string | null>(null);
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly isMenuItem = input<Primitives.BooleanValue | boolean | null>(null);
  readonly selected = input<Primitives.BooleanValue | boolean | null>(null);
  readonly value = input<Primitives.StringValue | string | null>(null);
  readonly type = input<Primitives.StringValue | string | null>(null);

  protected resolvedDelegatesFocus = computed(() => {
    const v = this.delegatesFocus();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedMode = computed(() => {
    const v = this.mode();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedSerializable = computed(() => {
    const v = this.serializable();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSlotAssignment = computed(() => {
    const v = this.slotAssignment();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedDisabled = computed(() => {
    const v = this.disabled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedIsMenuItem = computed(() => {
    const v = this.isMenuItem();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSelected = computed(() => {
    const v = this.selected();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedValue = computed(() => {
    const v = this.value();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedType = computed(() => {
    const v = this.type();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
}
