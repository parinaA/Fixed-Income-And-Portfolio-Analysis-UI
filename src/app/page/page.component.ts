import { Component, OnInit } from '@angular/core';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';
import {PortfolioServiceService} from './profitloss-service.service';
import {NGXLogger} from 'ngx-logger';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  getTable:JSON[];

  coupons:any;
  profit:any;
  
  constructor(private logger:NGXLogger, private _httpService:PortfolioServiceService) { }

  ngOnInit(): void {

    this._httpService.getprofitlosstable().subscribe((res : any[])=>
    {
   // this.logger.debug(res);
    this.getTable = res;
    });

    this._httpService.getrealizedprofit().subscribe((res : any[])=>
    {
   // this.logger.debug(res);
    this.profit = res;
   // this.stringifyFunds();
    });
    this._httpService.getcouponsaccrued().subscribe((res : any[])=>
    {
   // this.logger.debug(res);
    this.coupons = res;
   // this.stringifyFunds();
    });

  }

  elements: any = [
    {id: 1, first: 'T-Bill', last: '+ INR 23,000', handle: '-', total: 'INR 23,000'},
    {id: 2, first: 'Corporate Bonds', last: '+ INR 6,000', handle: '+ INR 10,000', total: 'INR 16,000'},
    {id: 3, first: 'Commercial Paper', last: '+ INR 3,000', handle: '- INR 1,000', total: 'INR 2,000'},
  ];

  headElements = ['ISIN', 'Security', 'Coupon Income', 'Realised Gains/Losses'];

  

}







