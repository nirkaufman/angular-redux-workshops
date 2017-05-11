import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-auth',
  template: `
    <ngr-login></ngr-login>
    <!--<ngr-lost-password></ngr-lost-password>-->
    <!--<ngr-register></ngr-register>  -->
  `,
  styles: []
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
