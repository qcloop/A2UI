import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/tabs/tabs.js';

@Component({
  selector: 'catalog-md-tabs',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-tabs
        [autoActivate]="resolvedAutoActivate()">
      <ng-content></ng-content>
    </md-tabs>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdTabs extends DynamicComponent {
  readonly autoActivate = input<Primitives.BooleanValue | boolean | null>(null);

  protected resolvedAutoActivate = computed(() => {
    const v = this.autoActivate();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.BooleanValue) : (v as boolean)) ?? false;
  });
}
