import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/switch/switch.js';

@Component({
  selector: 'catalog-md-switch',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-switch
        [selected]="resolvedSelected()"
        [icons]="resolvedIcons()"
        [showOnlySelectedIcon]="resolvedShowOnlySelectedIcon()"
        [required]="resolvedRequired()"
        [value]="resolvedValue()"
        [disabled]="resolvedDisabled()"
        [name]="resolvedName()">
      <ng-content></ng-content>
    </md-switch>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdSwitch extends DynamicComponent {
  readonly selected = input<Primitives.BooleanValue | boolean | null>(null);
  readonly icons = input<Primitives.BooleanValue | boolean | null>(null);
  readonly showOnlySelectedIcon = input<Primitives.BooleanValue | boolean | null>(null);
  readonly required = input<Primitives.BooleanValue | boolean | null>(null);
  readonly value = input<Primitives.StringValue | string | null>(null);
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly name = input<Primitives.StringValue | string | null>(null);

  protected resolvedSelected = computed(() => {
    const v = this.selected();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedIcons = computed(() => {
    const v = this.icons();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedShowOnlySelectedIcon = computed(() => {
    const v = this.showOnlySelectedIcon();
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
  protected resolvedDisabled = computed(() => {
    const v = this.disabled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedName = computed(() => {
    const v = this.name();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
}
