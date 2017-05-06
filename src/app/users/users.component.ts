import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-users',
  template: `
      <div class="row">
        <div class="col-6">
          <ngr-update></ngr-update>
        </div>
        <div class="col-6">
          <ngr-list></ngr-list>
        </div>
      </div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
