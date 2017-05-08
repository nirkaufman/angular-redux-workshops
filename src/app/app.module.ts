import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {ListModule} from './list/list.module';
import {SharedModule} from './shared/shared.module';
import {StoreModule} from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports     : [
    BrowserModule,
    SharedModule,
    StoreModule,
    ListModule,
    AuthModule
  ],
  providers   : [],
  bootstrap   : [AppComponent],
})
export class AppModule {

}
