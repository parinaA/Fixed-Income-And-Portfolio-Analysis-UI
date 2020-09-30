//import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';

//@Component({ selector: 'app', templateUrl: 'app.component.html' })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdb-angular-free';
  items = [];
  pageOfItems: Array<any>;

  constructor() { }

  ngOnInit() {
      // an example array of 150 items to be paged
      this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
  }
}


