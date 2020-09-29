import { Component, OnInit } from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import { HttpClient } from '@angular/common/http';
import {GenerateTradeServiceService} from './generate-trade-service.service';

@Component({
  selector: 'app-generatetrade',
  templateUrl: './generatetrade.component.html',
  styleUrls: ['./generatetrade.component.scss']
})
export class GeneratetradeComponent implements OnInit {

  getData:any[];

  elements: any = [
    {"tradeId":"06acd1d5-3596-4b49-ac7a-f4d166ea08b0","security":"Certificate_Of_Deposits","isin":"INF03LN01013","issuerName":"Bajaj Finserv Certificate of Deposit","tradeDate":"2020-09-29T12:00:59.586+00:00","price":100000.98,"quantity":176,"buy":true},
    {"tradeId":"0807dd4c-1171-4c2f-8a10-db8892bf784d","security":"Municipal_Bonds","isin":"INE117E24018","issuerName":"AMC Municipal Bond","tradeDate":"2020-09-29T12:00:59.653+00:00","price":50001.27,"quantity":124,"buy":false}
  ];

  headElements = ['ISIN', 'Security', 'Quantity Brought', 'Trade Date', 'Buy-Price'];


  constructor(private logger:NGXLogger, private _httpService:GenerateTradeServiceService) { }

  ngOnInit(): void {

    this._httpService.getUserDetails().subscribe((res : any[])=>{
      this.logger.debug(res);
      this.getData = res;
  });

  

    this.logger.debug('informcomponent.init');
 }

  

 

  }
