import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/fab/fab.js';

@Component({
  selector: 'catalog-md-fab',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-fab
        [size]="resolvedSize()"
        [label]="resolvedLabel()"
        [lowered]="resolvedLowered()"
        [small]="resolvedSmall()"
        [large]="resolvedLarge()"
        [extended]="resolvedExtended()"
        [variant]="resolvedVariant()"
        [primary]="resolvedPrimary()"
        [secondary]="resolvedSecondary()"
        [tertiary]="resolvedTertiary()">
      <ng-content></ng-content>
    </md-fab>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdFab extends DynamicComponent {
  readonly size = input<Primitives.StringValue | string | null>(null);
  readonly label = input<Primitives.StringValue | string | null>(null);
  readonly lowered = input<Primitives.BooleanValue | boolean | null>(null);
  readonly small = input<Primitives.BooleanValue | boolean | null>(null);
  readonly large = input<Primitives.BooleanValue | boolean | null>(null);
  readonly extended = input<Primitives.BooleanValue | boolean | null>(null);
  readonly variant = input<Primitives.StringValue | string | null>(null);
  readonly primary = input<Primitives.BooleanValue | boolean | null>(null);
  readonly secondary = input<Primitives.BooleanValue | boolean | null>(null);
  readonly tertiary = input<Primitives.BooleanValue | boolean | null>(null);

  protected resolvedSize = computed(() => {
    const v = this.size();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedLabel = computed(() => {
    const v = this.label();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedLowered = computed(() => {
    const v = this.lowered();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSmall = computed(() => {
    const v = this.small();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedLarge = computed(() => {
    const v = this.large();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedExtended = computed(() => {
    const v = this.extended();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedVariant = computed(() => {
    const v = this.variant();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedPrimary = computed(() => {
    const v = this.primary();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSecondary = computed(() => {
    const v = this.secondary();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedTertiary = computed(() => {
    const v = this.tertiary();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
