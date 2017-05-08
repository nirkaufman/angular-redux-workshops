import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {ListModule} from './list/list.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports     : [
    BrowserModule,
    SharedModule,
    ListModule,
    AuthModule
  ],
  providers   : [],
  bootstrap   : [AppComponent],
})
export class AppModule {

}
