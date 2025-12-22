import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/select/outlined-select.js';

@Component({
  selector: 'catalog-md-outlined-select',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-outlined-select
        [delegatesFocus]="resolvedDelegatesFocus()"
        [mode]="resolvedMode()"
        [serializable]="resolvedSerializable()"
        [slotAssignment]="resolvedSlotAssignment()"
        [quick]="resolvedQuick()"
        [required]="resolvedRequired()"
        [errorText]="resolvedErrorText()"
        [label]="resolvedLabel()"
        [noAsterisk]="resolvedNoAsterisk()"
        [supportingText]="resolvedSupportingText()"
        [error]="resolvedError()"
        [menuPositioning]="resolvedMenuPositioning()"
        [clampMenuWidth]="resolvedClampMenuWidth()"
        [typeaheadDelay]="resolvedTypeaheadDelay()"
        [hasLeadingIcon]="resolvedHasLeadingIcon()"
        [displayText]="resolvedDisplayText()"
        [menuAlign]="resolvedMenuAlign()"
        [disabled]="resolvedDisabled()"
        [name]="resolvedName()">
      <ng-content></ng-content>
    </md-outlined-select>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdOutlinedSelect extends DynamicComponent {
  readonly delegatesFocus = input<Primitives.BooleanValue | boolean | null>(null);
  readonly mode = input<Primitives.StringValue | string | null>(null);
  readonly serializable = input<Primitives.BooleanValue | boolean | null>(null);
  readonly slotAssignment = input<Primitives.StringValue | string | null>(null);
  readonly quick = input<Primitives.BooleanValue | boolean | null>(null);
  readonly required = input<Primitives.BooleanValue | boolean | null>(null);
  readonly errorText = input<Primitives.StringValue | string | null>(null);
  readonly label = input<Primitives.StringValue | string | null>(null);
  readonly noAsterisk = input<Primitives.BooleanValue | boolean | null>(null);
  readonly supportingText = input<Primitives.StringValue | string | null>(null);
  readonly error = input<Primitives.BooleanValue | boolean | null>(null);
  readonly menuPositioning = input<Primitives.StringValue | string | null>(null);
  readonly clampMenuWidth = input<Primitives.BooleanValue | boolean | null>(null);
  readonly typeaheadDelay = input<Primitives.NumberValue | number | null>(null);
  readonly hasLeadingIcon = input<Primitives.BooleanValue | boolean | null>(null);
  readonly displayText = input<Primitives.StringValue | string | null>(null);
  readonly menuAlign = input<Primitives.StringValue | string | null>(null);
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly name = input<Primitives.StringValue | string | null>(null);

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
  protected resolvedQuick = computed(() => {
    const v = this.quick();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedRequired = computed(() => {
    const v = this.required();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedErrorText = computed(() => {
    const v = this.errorText();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedLabel = computed(() => {
    const v = this.label();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedNoAsterisk = computed(() => {
    const v = this.noAsterisk();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSupportingText = computed(() => {
    const v = this.supportingText();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedError = computed(() => {
    const v = this.error();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedMenuPositioning = computed(() => {
    const v = this.menuPositioning();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedClampMenuWidth = computed(() => {
    const v = this.clampMenuWidth();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedTypeaheadDelay = computed(() => {
    const v = this.typeaheadDelay();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedHasLeadingIcon = computed(() => {
    const v = this.hasLeadingIcon();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedDisplayText = computed(() => {
    const v = this.displayText();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedMenuAlign = computed(() => {
    const v = this.menuAlign();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedDisabled = computed(() => {
    const v = this.disabled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedName = computed(() => {
    const v = this.name();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
}
