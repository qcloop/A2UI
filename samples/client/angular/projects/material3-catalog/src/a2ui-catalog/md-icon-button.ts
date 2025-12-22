import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/iconbutton/icon-button.js';

@Component({
  selector: 'catalog-md-icon-button',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-icon-button
        [disabled]="resolvedDisabled()"
        [softDisabled]="resolvedSoftDisabled()"
        [flipIconInRtl]="resolvedFlipIconInRtl()"
        [href]="resolvedHref()"
        [download]="resolvedDownload()"
        [target]="resolvedTarget()"
        [ariaLabelSelected]="resolvedAriaLabelSelected()"
        [toggle]="resolvedToggle()"
        [selected]="resolvedSelected()"
        [type]="resolvedType()"
        [value]="resolvedValue()"
        [standard]="resolvedStandard()">
      <ng-content></ng-content>
    </md-icon-button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdIconButton extends DynamicComponent {
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly softDisabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly flipIconInRtl = input<Primitives.BooleanValue | boolean | null>(null);
  readonly href = input<Primitives.StringValue | string | null>(null);
  readonly download = input<Primitives.StringValue | string | null>(null);
  readonly target = input<Primitives.StringValue | string | null>(null);
  readonly ariaLabelSelected = input<Primitives.StringValue | string | null>(null);
  readonly toggle = input<Primitives.BooleanValue | boolean | null>(null);
  readonly selected = input<Primitives.BooleanValue | boolean | null>(null);
  readonly type = input<Primitives.StringValue | string | null>(null);
  readonly value = input<Primitives.StringValue | string | null>(null);
  readonly standard = input<Primitives.BooleanValue | boolean | null>(null);

  protected resolvedDisabled = computed(() => {
    const v = this.disabled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSoftDisabled = computed(() => {
    const v = this.softDisabled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedFlipIconInRtl = computed(() => {
    const v = this.flipIconInRtl();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedHref = computed(() => {
    const v = this.href();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedDownload = computed(() => {
    const v = this.download();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedTarget = computed(() => {
    const v = this.target();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedAriaLabelSelected = computed(() => {
    const v = this.ariaLabelSelected();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedToggle = computed(() => {
    const v = this.toggle();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSelected = computed(() => {
    const v = this.selected();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedType = computed(() => {
    const v = this.type();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedValue = computed(() => {
    const v = this.value();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedStandard = computed(() => {
    const v = this.standard();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
