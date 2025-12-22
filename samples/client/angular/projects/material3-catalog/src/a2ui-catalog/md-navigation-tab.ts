import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/labs/navigationtab/navigation-tab.js';

@Component({
  selector: 'catalog-md-navigation-tab',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-navigation-tab
        [disabled]="resolvedDisabled()"
        [active]="resolvedActive()"
        [hideInactiveLabel]="resolvedHideInactiveLabel()"
        [label]="resolvedLabel()"
        [badgeValue]="resolvedBadgeValue()"
        [showBadge]="resolvedShowBadge()"
        [buttonElement]="resolvedButtonElement()">
      <ng-content></ng-content>
    </md-navigation-tab>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdNavigationTab extends DynamicComponent {
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly active = input<Primitives.BooleanValue | boolean | null>(null);
  readonly hideInactiveLabel = input<Primitives.BooleanValue | boolean | null>(null);
  readonly label = input<Primitives.StringValue | string | null>(null);
  readonly badgeValue = input<Primitives.StringValue | string | null>(null);
  readonly showBadge = input<Primitives.BooleanValue | boolean | null>(null);
  readonly buttonElement = input<Primitives.StringValue | string | null>(null);

  protected resolvedDisabled = computed(() => {
    const v = this.disabled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedActive = computed(() => {
    const v = this.active();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedHideInactiveLabel = computed(() => {
    const v = this.hideInactiveLabel();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedLabel = computed(() => {
    const v = this.label();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedBadgeValue = computed(() => {
    const v = this.badgeValue();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedShowBadge = computed(() => {
    const v = this.showBadge();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedButtonElement = computed(() => {
    const v = this.buttonElement();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
}
