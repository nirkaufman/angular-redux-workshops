import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngr-navbar',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <div class="container">
        <a class="navbar-brand"
           href="#">Angular & Redux Workshop</a>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
}
