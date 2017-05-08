import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngr-container',
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
})
export class ContainerComponent  {

}
