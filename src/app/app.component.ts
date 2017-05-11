import {Component} from '@angular/core';

@Component({
  selector: 'ngr-root',
  template: `
    <ngr-navbar></ngr-navbar>
    <ngr-container>
      <router-outlet></router-outlet>
    </ngr-container>
  `,
})
export class AppComponent {

}
