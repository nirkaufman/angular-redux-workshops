import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {LostPasswordComponent} from './lost-password/lost-password.component';
import { AuthComponent } from './auth.component';


@NgModule({
  imports     : [CommonModule],
  declarations: [AuthComponent, LoginComponent, RegisterComponent, LostPasswordComponent],
  exports     : [AuthComponent],
})
export class AuthModule {
}
