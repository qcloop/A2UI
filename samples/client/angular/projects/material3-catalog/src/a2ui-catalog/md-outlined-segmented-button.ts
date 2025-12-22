import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/labs/segmentedbutton/outlined-segmented-button.js';

@Component({
  selector: 'catalog-md-outlined-segmented-button',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-outlined-segmented-button
        [disabled]="resolvedDisabled()"
        [selected]="resolvedSelected()"
        [label]="resolvedLabel()"
        [noCheckmark]="resolvedNoCheckmark()"
        [hasIcon]="resolvedHasIcon()">
      <ng-content></ng-content>
    </md-outlined-segmented-button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdOutlinedSegmentedButton extends DynamicComponent {
  readonly disabled = input<Primitives.BooleanValue | boolean | null>(null);
  readonly selected = input<Primitives.BooleanValue | boolean | null>(null);
  readonly label = input<Primitives.StringValue | string | null>(null);
  readonly noCheckmark = input<Primitives.BooleanValue | boolean | null>(null);
  readonly hasIcon = input<Primitives.BooleanValue | boolean | null>(null);

  protected resolvedDisabled = computed(() => {
    const v = this.disabled();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedSelected = computed(() => {
    const v = this.selected();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedLabel = computed(() => {
    const v = this.label();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
  protected resolvedNoCheckmark = computed(() => {
    const v = this.noCheckmark();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
  protected resolvedHasIcon = computed(() => {
    const v = this.hasIcon();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
