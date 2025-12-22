import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/labs/navigationdrawer/navigation-drawer.js';

@Component({
  selector: 'catalog-md-navigation-drawer',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-navigation-drawer
        [opened]="resolvedOpened()"
        [pivot]="resolvedPivot()">
      <ng-content></ng-content>
    </md-navigation-drawer>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdNavigationDrawer extends DynamicComponent {
  readonly opened = input<Primitives.BooleanValue | boolean | null>(null);
  readonly pivot = input<Primitives.StringValue | string | null>(null);

  protected resolvedOpened = computed(() => {
    const v = this.opened();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedPivot = computed(() => {
    const v = this.pivot();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
}
