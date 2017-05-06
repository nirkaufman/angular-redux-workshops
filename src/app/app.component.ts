import {Component} from '@angular/core';

@Component({
  selector: 'ngr-root',
  template: `
    <ngr-navbar></ngr-navbar>
    <ngr-container>
      <ngr-login></ngr-login>
      <!--<ngr-list></ngr-list>-->
      <!--<ngr-update></ngr-update>-->
      <!--<ngr-loader></ngr-loader>-->
    </ngr-container>
    <ngr-footer></ngr-footer>
  `,
  styles  : []
})
export class AppComponent {
  public title = 'Angular & Redux Workshop';
}
