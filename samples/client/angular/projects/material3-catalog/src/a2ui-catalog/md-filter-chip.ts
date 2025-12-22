import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/chips/filter-chip.js';

@Component({
  selector: 'catalog-md-filter-chip',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-filter-chip
        [delegatesFocus]="resolvedDelegatesFocus()"
        [mode]="resolvedMode()"
        [serializable]="resolvedSerializable()"
        [slotAssignment]="resolvedSlotAssignment()"
        [disabled]="resolvedDisabled()"
        [softDisabled]="resolvedSoftDisabled()"
        [alwaysFocusable]="resolvedAlwaysFocusable()"
        [label]="resolvedLabel()"
        [hasIcon]="resolvedHasIcon()"
        [trailing]="resolvedTrailing()"
        [elevated]="resolvedElevated()"
        [removable]="resolvedRemovable()"
        [selected]="resolvedSelected()"
        [hasSelectedIcon]="resolvedHasSelectedIcon()">
      <ng-content></ng-content>
    </md-filter-chip>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdFilterChip extends DynamicComponent {
  readonly delegatesFocus = input<Primitives.BooleanValue | boolean | null>(null);
  readonly mode = input<Primitives.StringValue | string | null>(null);
  readonly serializable = input<Primitives.BooleanValue | boolean | null>(null);
  readonly slotAssignment = input<Primitives.StringValue | string | null>(null);
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly softDisabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly alwaysFocusable = input<Primitives.BooleanValue | boolean | null>(null);
  readonly label = input<Primitives.StringValue | string | null>(null);
  readonly hasIcon = input<Primitives.BooleanValue | boolean | null>(null);
  readonly trailing = input<Primitives.BooleanValue | boolean | null>(null);
  readonly elevated = input<Primitives.BooleanValue | boolean | null>(null);
  readonly removable = input<Primitives.BooleanValue | boolean | null>(null);
  readonly selected = input<Primitives.BooleanValue | boolean | null>(null);
  readonly hasSelectedIcon = input<Primitives.BooleanValue | boolean | null>(null);

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
  protected resolvedSoftDisabled = computed(() => {
    const v = this.softDisabled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedAlwaysFocusable = computed(() => {
    const v = this.alwaysFocusable();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedLabel = computed(() => {
    const v = this.label();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedHasIcon = computed(() => {
    const v = this.hasIcon();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedTrailing = computed(() => {
    const v = this.trailing();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedElevated = computed(() => {
    const v = this.elevated();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedRemovable = computed(() => {
    const v = this.removable();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSelected = computed(() => {
    const v = this.selected();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedHasSelectedIcon = computed(() => {
    const v = this.hasSelectedIcon();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
