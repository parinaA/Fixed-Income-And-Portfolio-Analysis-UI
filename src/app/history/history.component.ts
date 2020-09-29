import { Component, OnInit } from '@angular/core';
import {NGXLogger} from 'ngx-logger';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private logger:NGXLogger) { }

  ngOnInit(): void {
    this.logger.debug('informcomponent.init');
  }


  

}
