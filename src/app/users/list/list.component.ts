import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngr-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  users = new Array(5);

  constructor() { }

  ngOnInit() {
  }

}
