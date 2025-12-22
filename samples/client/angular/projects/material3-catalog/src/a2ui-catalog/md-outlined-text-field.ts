import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/textfield/outlined-text-field.js';

@Component({
  selector: 'catalog-md-outlined-text-field',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-outlined-text-field
        [error]="resolvedError()"
        [errorText]="resolvedErrorText()"
        [label]="resolvedLabel()"
        [noAsterisk]="resolvedNoAsterisk()"
        [required]="resolvedRequired()"
        [value]="resolvedValue()"
        [prefixText]="resolvedPrefixText()"
        [suffixText]="resolvedSuffixText()"
        [hasLeadingIcon]="resolvedHasLeadingIcon()"
        [hasTrailingIcon]="resolvedHasTrailingIcon()"
        [supportingText]="resolvedSupportingText()"
        [textDirection]="resolvedTextDirection()"
        [rows]="resolvedRows()"
        [cols]="resolvedCols()"
        [inputMode]="resolvedInputMode()"
        [max]="resolvedMax()"
        [maxLength]="resolvedMaxLength()"
        [min]="resolvedMin()"
        [minLength]="resolvedMinLength()"
        [noSpinner]="resolvedNoSpinner()"
        [pattern]="resolvedPattern()"
        [placeholder]="resolvedPlaceholder()"
        [readOnly]="resolvedReadOnly()"
        [multiple]="resolvedMultiple()"
        [step]="resolvedStep()"
        [type]="resolvedType()"
        [autocomplete]="resolvedAutocomplete()"
        [disabled]="resolvedDisabled()"
        [name]="resolvedName()">
      <ng-content></ng-content>
    </md-outlined-text-field>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdOutlinedTextField extends DynamicComponent {
  readonly error = input<Primitives.BooleanValue | boolean | null>(null);
  readonly errorText = input<Primitives.StringValue | string | null>(null);
  readonly label = input<Primitives.StringValue | string | null>(null);
  readonly noAsterisk = input<Primitives.BooleanValue | boolean | null>(null);
  readonly required = input<Primitives.BooleanValue | boolean | null>(null);
  readonly value = input<Primitives.StringValue | string | null>(null);
  readonly prefixText = input<Primitives.StringValue | string | null>(null);
  readonly suffixText = input<Primitives.StringValue | string | null>(null);
  readonly hasLeadingIcon = input<Primitives.BooleanValue | boolean | null>(null);
  readonly hasTrailingIcon = input<Primitives.BooleanValue | boolean | null>(null);
  readonly supportingText = input<Primitives.StringValue | string | null>(null);
  readonly textDirection = input<Primitives.StringValue | string | null>(null);
  readonly rows = input<Primitives.NumberValue | number | null>(null);
  readonly cols = input<Primitives.NumberValue | number | null>(null);
  readonly inputMode = input<Primitives.StringValue | string | null>(null);
  readonly max = input<Primitives.StringValue | string | null>(null);
  readonly maxLength = input<Primitives.NumberValue | number | null>(null);
  readonly min = input<Primitives.StringValue | string | null>(null);
  readonly minLength = input<Primitives.NumberValue | number | null>(null);
  readonly noSpinner = input<Primitives.BooleanValue | boolean | null>(null);
  readonly pattern = input<Primitives.StringValue | string | null>(null);
  readonly placeholder = input<Primitives.StringValue | string | null>(null);
  readonly readOnly = input<Primitives.BooleanValue | boolean | null>(null);
  readonly multiple = input<Primitives.BooleanValue | boolean | null>(null);
  readonly step = input<Primitives.StringValue | string | null>(null);
  readonly type = input<Primitives.StringValue | string | null>(null);
  readonly autocomplete = input<Primitives.StringValue | string | null>(null);
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly name = input<Primitives.StringValue | string | null>(null);

  protected resolvedError = computed(() => {
    const v = this.error();
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
  protected resolvedRequired = computed(() => {
    const v = this.required();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedValue = computed(() => {
    const v = this.value();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedPrefixText = computed(() => {
    const v = this.prefixText();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedSuffixText = computed(() => {
    const v = this.suffixText();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedHasLeadingIcon = computed(() => {
    const v = this.hasLeadingIcon();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedHasTrailingIcon = computed(() => {
    const v = this.hasTrailingIcon();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSupportingText = computed(() => {
    const v = this.supportingText();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedTextDirection = computed(() => {
    const v = this.textDirection();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedRows = computed(() => {
    const v = this.rows();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedCols = computed(() => {
    const v = this.cols();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedInputMode = computed(() => {
    const v = this.inputMode();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedMax = computed(() => {
    const v = this.max();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedMaxLength = computed(() => {
    const v = this.maxLength();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedMin = computed(() => {
    const v = this.min();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedMinLength = computed(() => {
    const v = this.minLength();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedNoSpinner = computed(() => {
    const v = this.noSpinner();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedPattern = computed(() => {
    const v = this.pattern();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedPlaceholder = computed(() => {
    const v = this.placeholder();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedReadOnly = computed(() => {
    const v = this.readOnly();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedMultiple = computed(() => {
    const v = this.multiple();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedStep = computed(() => {
    const v = this.step();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedType = computed(() => {
    const v = this.type();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedAutocomplete = computed(() => {
    const v = this.autocomplete();
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
