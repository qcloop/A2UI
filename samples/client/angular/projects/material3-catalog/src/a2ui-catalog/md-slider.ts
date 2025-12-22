import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/slider/slider.js';

@Component({
  selector: 'catalog-md-slider',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-slider
        [min]="resolvedMin()"
        [max]="resolvedMax()"
        [value]="resolvedValue()"
        [valueStart]="resolvedValueStart()"
        [valueEnd]="resolvedValueEnd()"
        [valueLabel]="resolvedValueLabel()"
        [valueLabelStart]="resolvedValueLabelStart()"
        [valueLabelEnd]="resolvedValueLabelEnd()"
        [ariaLabelStart]="resolvedAriaLabelStart()"
        [ariaValueTextStart]="resolvedAriaValueTextStart()"
        [ariaLabelEnd]="resolvedAriaLabelEnd()"
        [ariaValueTextEnd]="resolvedAriaValueTextEnd()"
        [step]="resolvedStep()"
        [ticks]="resolvedTicks()"
        [labeled]="resolvedLabeled()"
        [range]="resolvedRange()"
        [disabled]="resolvedDisabled()"
        [name]="resolvedName()">
      <ng-content></ng-content>
    </md-slider>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdSlider extends DynamicComponent {
  readonly min = input<Primitives.NumberValue | number | null>(null);
  readonly max = input<Primitives.NumberValue | number | null>(null);
  readonly value = input<Primitives.NumberValue | number | null>(null);
  readonly valueStart = input<Primitives.NumberValue | number | null>(null);
  readonly valueEnd = input<Primitives.NumberValue | number | null>(null);
  readonly valueLabel = input<Primitives.StringValue | string | null>(null);
  readonly valueLabelStart = input<Primitives.StringValue | string | null>(null);
  readonly valueLabelEnd = input<Primitives.StringValue | string | null>(null);
  readonly ariaLabelStart = input<Primitives.StringValue | string | null>(null);
  readonly ariaValueTextStart = input<Primitives.StringValue | string | null>(null);
  readonly ariaLabelEnd = input<Primitives.StringValue | string | null>(null);
  readonly ariaValueTextEnd = input<Primitives.StringValue | string | null>(null);
  readonly step = input<Primitives.NumberValue | number | null>(null);
  readonly ticks = input<Primitives.BooleanValue | boolean | null>(null);
  readonly labeled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly range = input<Primitives.BooleanValue | boolean | null>(null);
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly name = input<Primitives.StringValue | string | null>(null);

  protected resolvedMin = computed(() => {
    const v = this.min();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedMax = computed(() => {
    const v = this.max();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedValue = computed(() => {
    const v = this.value();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedValueStart = computed(() => {
    const v = this.valueStart();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedValueEnd = computed(() => {
    const v = this.valueEnd();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedValueLabel = computed(() => {
    const v = this.valueLabel();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedValueLabelStart = computed(() => {
    const v = this.valueLabelStart();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedValueLabelEnd = computed(() => {
    const v = this.valueLabelEnd();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedAriaLabelStart = computed(() => {
    const v = this.ariaLabelStart();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedAriaValueTextStart = computed(() => {
    const v = this.ariaValueTextStart();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedAriaLabelEnd = computed(() => {
    const v = this.ariaLabelEnd();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedAriaValueTextEnd = computed(() => {
    const v = this.ariaValueTextEnd();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedStep = computed(() => {
    const v = this.step();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedTicks = computed(() => {
    const v = this.ticks();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedLabeled = computed(() => {
    const v = this.labeled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedRange = computed(() => {
    const v = this.range();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
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
