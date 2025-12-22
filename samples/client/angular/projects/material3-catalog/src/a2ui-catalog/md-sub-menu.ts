import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/menu/sub-menu.js';

@Component({
  selector: 'catalog-md-sub-menu',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-sub-menu
        [anchorCorner]="resolvedAnchorCorner()"
        [menuCorner]="resolvedMenuCorner()"
        [hoverOpenDelay]="resolvedHoverOpenDelay()"
        [hoverCloseDelay]="resolvedHoverCloseDelay()"
        [isSubMenu]="resolvedIsSubMenu()">
      <ng-content></ng-content>
    </md-sub-menu>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdSubMenu extends DynamicComponent {
  readonly anchorCorner = input<Primitives.StringValue | string | null>(null);
  readonly menuCorner = input<Primitives.StringValue | string | null>(null);
  readonly hoverOpenDelay = input<Primitives.NumberValue | number | null>(null);
  readonly hoverCloseDelay = input<Primitives.NumberValue | number | null>(null);
  readonly isSubMenu = input<Primitives.BooleanValue | boolean | null>(null);

  protected resolvedAnchorCorner = computed(() => {
    const v = this.anchorCorner();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedMenuCorner = computed(() => {
    const v = this.menuCorner();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedHoverOpenDelay = computed(() => {
    const v = this.hoverOpenDelay();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedHoverCloseDelay = computed(() => {
    const v = this.hoverCloseDelay();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedIsSubMenu = computed(() => {
    const v = this.isSubMenu();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
