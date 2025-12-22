import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/menu/menu.js';

@Component({
  selector: 'catalog-md-menu',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-menu
        [anchor]="resolvedAnchor()"
        [positioning]="resolvedPositioning()"
        [quick]="resolvedQuick()"
        [hasOverflow]="resolvedHasOverflow()"
        [open]="resolvedOpen()"
        [xOffset]="resolvedXOffset()"
        [yOffset]="resolvedYOffset()"
        [noHorizontalFlip]="resolvedNoHorizontalFlip()"
        [noVerticalFlip]="resolvedNoVerticalFlip()"
        [typeaheadDelay]="resolvedTypeaheadDelay()"
        [anchorCorner]="resolvedAnchorCorner()"
        [menuCorner]="resolvedMenuCorner()"
        [stayOpenOnOutsideClick]="resolvedStayOpenOnOutsideClick()"
        [stayOpenOnFocusout]="resolvedStayOpenOnFocusout()"
        [skipRestoreFocus]="resolvedSkipRestoreFocus()"
        [defaultFocus]="resolvedDefaultFocus()"
        [noNavigationWrap]="resolvedNoNavigationWrap()"
        [isSubmenu]="resolvedIsSubmenu()"
        [typeaheadController]="resolvedTypeaheadController()">
      <ng-content></ng-content>
    </md-menu>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdMenu extends DynamicComponent {
  readonly anchor = input<Primitives.StringValue | string | null>(null);
  readonly positioning = input<Primitives.StringValue | string | null>(null);
  readonly quick = input<Primitives.BooleanValue | boolean | null>(null);
  readonly hasOverflow = input<Primitives.BooleanValue | boolean | null>(null);
  readonly open = input<Primitives.BooleanValue | boolean | null>(null);
  readonly xOffset = input<Primitives.NumberValue | number | null>(null);
  readonly yOffset = input<Primitives.NumberValue | number | null>(null);
  readonly noHorizontalFlip = input<Primitives.BooleanValue | boolean | null>(null);
  readonly noVerticalFlip = input<Primitives.BooleanValue | boolean | null>(null);
  readonly typeaheadDelay = input<Primitives.NumberValue | number | null>(null);
  readonly anchorCorner = input<Primitives.StringValue | string | null>(null);
  readonly menuCorner = input<Primitives.StringValue | string | null>(null);
  readonly stayOpenOnOutsideClick = input<Primitives.BooleanValue | boolean | null>(null);
  readonly stayOpenOnFocusout = input<Primitives.BooleanValue | boolean | null>(null);
  readonly skipRestoreFocus = input<Primitives.BooleanValue | boolean | null>(null);
  readonly defaultFocus = input<Primitives.StringValue | string | null>(null);
  readonly noNavigationWrap = input<Primitives.BooleanValue | boolean | null>(null);
  readonly isSubmenu = input<Primitives.BooleanValue | boolean | null>(null);
  readonly typeaheadController = input<Primitives.StringValue | string | null>(null);

  protected resolvedAnchor = computed(() => {
    const v = this.anchor();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedPositioning = computed(() => {
    const v = this.positioning();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedQuick = computed(() => {
    const v = this.quick();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedHasOverflow = computed(() => {
    const v = this.hasOverflow();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedOpen = computed(() => {
    const v = this.open();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedXOffset = computed(() => {
    const v = this.xOffset();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedYOffset = computed(() => {
    const v = this.yOffset();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedNoHorizontalFlip = computed(() => {
    const v = this.noHorizontalFlip();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedNoVerticalFlip = computed(() => {
    const v = this.noVerticalFlip();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedTypeaheadDelay = computed(() => {
    const v = this.typeaheadDelay();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.NumberValue) : (v as number)) ?? 0;
  });
  protected resolvedAnchorCorner = computed(() => {
    const v = this.anchorCorner();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedMenuCorner = computed(() => {
    const v = this.menuCorner();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedStayOpenOnOutsideClick = computed(() => {
    const v = this.stayOpenOnOutsideClick();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedStayOpenOnFocusout = computed(() => {
    const v = this.stayOpenOnFocusout();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSkipRestoreFocus = computed(() => {
    const v = this.skipRestoreFocus();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedDefaultFocus = computed(() => {
    const v = this.defaultFocus();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedNoNavigationWrap = computed(() => {
    const v = this.noNavigationWrap();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedIsSubmenu = computed(() => {
    const v = this.isSubmenu();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedTypeaheadController = computed(() => {
    const v = this.typeaheadController();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
}
