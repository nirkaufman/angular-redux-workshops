import { Component } from '@angular/core';

@Component({
  selector: 'ngr-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'ngr works!';
}
