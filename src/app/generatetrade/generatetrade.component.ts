import { Component, OnInit } from '@angular/core';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-generatetrade',
  templateUrl: './generatetrade.component.html',
  styleUrls: ['./generatetrade.component.scss']
})
export class GeneratetradeComponent implements OnInit {

  constructor(private logger:NGXLogger) { }

  ngOnInit(): void {
    this.logger.debug('informcomponent.init');
  }


  elements: any = [
    {id: 1011145789, first: 'T-Bill', last: ' 178', handle: '20/10/2019', total: 'INR 23,000'},
    {id: 1011187346, first: 'Corporate Bonds', last: ' 265', handle: '31/11/2019', total: 'INR 16,000'},
    {id: 1011136784, first: 'Commercial Paper', last: ' 140', handle: '05/03/2020', total: 'INR 2,000'},
  ];

  headElements = ['ISIN', 'Security', 'Quantity Brought', 'Trade Date', 'Buy-Price'];

  public chartType: string = 'bar';

 

}
