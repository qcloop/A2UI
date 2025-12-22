import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/menu/menu-item.js';

@Component({
  selector: 'catalog-md-menu-item',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-menu-item
        [delegatesFocus]="resolvedDelegatesFocus()"
        [mode]="resolvedMode()"
        [serializable]="resolvedSerializable()"
        [slotAssignment]="resolvedSlotAssignment()"
        [disabled]="resolvedDisabled()"
        [type]="resolvedType()"
        [href]="resolvedHref()"
        [target]="resolvedTarget()"
        [keepOpen]="resolvedKeepOpen()"
        [selected]="resolvedSelected()">
      <ng-content></ng-content>
    </md-menu-item>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdMenuItem extends DynamicComponent {
  readonly delegatesFocus = input<Primitives.BooleanValue | boolean | null>(null);
  readonly mode = input<Primitives.StringValue | string | null>(null);
  readonly serializable = input<Primitives.BooleanValue | boolean | null>(null);
  readonly slotAssignment = input<Primitives.StringValue | string | null>(null);
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly type = input<Primitives.StringValue | string | null>(null);
  readonly href = input<Primitives.StringValue | string | null>(null);
  readonly target = input<Primitives.StringValue | string | null>(null);
  readonly keepOpen = input<Primitives.BooleanValue | boolean | null>(null);
  readonly selected = input<Primitives.BooleanValue | boolean | null>(null);

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
  protected resolvedType = computed(() => {
    const v = this.type();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedHref = computed(() => {
    const v = this.href();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedTarget = computed(() => {
    const v = this.target();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedKeepOpen = computed(() => {
    const v = this.keepOpen();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSelected = computed(() => {
    const v = this.selected();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
