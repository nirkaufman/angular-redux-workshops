import {Component} from '@angular/core';

@Component({
  selector: 'ngr-navbar',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <div class="container">
        <a class="navbar-brand"
           routerLink="login">ANGULAR & REDUX</a>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link"
               routerLink="login">login
              <span class="sr-only">(current)</span></a>
          </li>

          <li class="nav-item active">
            <a class="nav-link"
               routerLink="list">list</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link"
               routerLink="history">History</a>
          </li>

        </ul>

        <span class="navbar-text">
            Hello Nir! &nbsp; <a href="logout" class="nav-item">logout</a>           
        </span>
      </div>

    </nav>
  `,
})
export class NavbarComponent {
}
