import {NgModule} from '@angular/core';
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store';
import {AppState} from './app.types';
import {appReducer} from './app.reducer';

@NgModule({
  imports: [NgReduxModule],
})
export class StoreModule {

  constructor(store: NgRedux<AppState>, devTools: DevToolsExtension) {
    store.configureStore(appReducer, {}, [], [devTools.enhancer()]);
  }

}
