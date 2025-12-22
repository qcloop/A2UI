import { Component, computed, input, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '@a2ui/angular';
import { Primitives } from '@a2ui/lit/0.8';
import '@material/web/list/list.js';

@Component({
  selector: 'catalog-md-list',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <md-list
        [item]="resolvedItem()">
      <ng-content></ng-content>
    </md-list>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class MdList extends DynamicComponent {
  readonly item = input<Primitives.StringValue | string | null>(null);

  protected resolvedItem = computed(() => {
    const v = this.item();
    return ((v && typeof v === 'object') ? this.resolvePrimitive(v as Primitives.StringValue) : (v as string)) ?? '';
  });
}
