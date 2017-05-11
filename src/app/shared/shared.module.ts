import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader/loader.component';
import { NavbarComponent } from './navbar.component';
import { ContainerComponent } from './container.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports     : [CommonModule, RouterModule],
  declarations: [LoaderComponent, NavbarComponent , ContainerComponent],
  exports     : [LoaderComponent, NavbarComponent, ContainerComponent],
})
export class SharedModule {
}