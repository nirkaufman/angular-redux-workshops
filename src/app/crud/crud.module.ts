import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, UpdateComponent],
  exports: [ListComponent,UpdateComponent]
})
export class CrudModule { }
