import {Component} from '@angular/core';

@Component({
  selector: 'ngr-root',
  template: `
    <ngr-navbar></ngr-navbar>
    <ngr-container>
      <ngr-login></ngr-login>
      <!--<ngr-register></ngr-register>-->
      <!--<ngr-list></ngr-list>-->
      <!--<ngr-loader></ngr-loader>-->
    </ngr-container>
    <ngr-footer></ngr-footer>
  `,
})
export class AppComponent {

}
