import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngr-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <a href="http://twitter.com/nirkaufman"
           target="_blank">@nirkaufman</a>
      </div>
    </footer>
  `
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
