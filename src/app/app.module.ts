import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {ListModule} from './list/list.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HistoryModule} from "./history/history.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports     : [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
    ListModule,
    AuthModule,
    HistoryModule
  ],
  bootstrap   : [AppComponent],
})
export class AppModule {

}
