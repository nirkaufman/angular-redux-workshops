import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {UpdateComponent} from './update/update.component';
import {UsersComponent} from './users.component';

@NgModule({
  imports     : [
    CommonModule
  ],
  declarations: [ListComponent, UpdateComponent, UsersComponent],
  exports     : [UsersComponent]
})
export class CrudModule {
}
