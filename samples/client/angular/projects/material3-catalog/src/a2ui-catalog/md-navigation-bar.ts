import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/labs/navigationbar/navigation-bar.js';

@Component({
  selector: 'catalog-md-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-navigation-bar
        [activeIndex]="resolvedActiveIndex()"
        [hideInactiveLabels]="resolvedHideInactiveLabels()"
        [tabs]="resolvedTabs()">
      <ng-content></ng-content>
    </md-navigation-bar>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdNavigationBar extends DynamicComponent {
  readonly activeIndex = input<Primitives.NumberValue | number | null>(null);
  readonly hideInactiveLabels = input<Primitives.BooleanValue | boolean | null>(null);
  readonly tabs = input<Primitives.StringValue | string | null>(null);

  protected resolvedActiveIndex = computed(() => {
    const v = this.activeIndex();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedHideInactiveLabels = computed(() => {
    const v = this.hideInactiveLabels();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedTabs = computed(() => {
    const v = this.tabs();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
}
