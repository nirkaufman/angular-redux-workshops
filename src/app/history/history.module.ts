import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogComponent} from './log/log.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [LogComponent],
  exports     : [LogComponent]
})
export class HistoryModule {
}
