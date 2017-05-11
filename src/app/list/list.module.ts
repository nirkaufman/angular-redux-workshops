import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import { ItemsComponent } from './items/items.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [ListComponent, ItemsComponent, FiltersComponent],
  exports     : [ListComponent]
})
export class ListModule {
}
