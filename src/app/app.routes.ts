import {Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {ListComponent} from './list/list/list.component';
import {LogComponent} from './history/log/log.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',   component: LoginComponent},
  {path: 'list',    component: ListComponent},
  {path: 'history', component: LogComponent},
];