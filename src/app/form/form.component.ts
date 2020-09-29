import { Component, OnInit } from '@angular/core';
import {NGXLogger} from 'ngx-logger';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private logger:NGXLogger) { }

  ngOnInit(): void {
    this.logger.debug('informcomponent.init');
  }

  

}
