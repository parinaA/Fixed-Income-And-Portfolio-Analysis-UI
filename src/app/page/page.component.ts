import { Component, OnInit } from '@angular/core';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  constructor(private logger:NGXLogger) { }

  ngOnInit(): void {
    this.logger.debug('informcomponent.init');
  }


  

}





