import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader/loader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [LoaderComponent, NavbarComponent, FooterComponent, ContainerComponent],
  exports     : [LoaderComponent, NavbarComponent, FooterComponent, ContainerComponent],
})
export class SharedModule {
}