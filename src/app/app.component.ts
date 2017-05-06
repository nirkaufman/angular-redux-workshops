import {Component} from '@angular/core';

@Component({
  selector: 'ngr-root',
  template: `
    <h1 class="display-4">{{title}}</h1>
  `,
  styles  : []
})
export class AppComponent {
  public title = 'Angular & Redux Workshop';
}
