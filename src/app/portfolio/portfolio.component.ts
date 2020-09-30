import { Component, OnInit } from '@angular/core';
import {PortfolioServiceService} from './portfolio-service.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  getBalance:JSON[];

  constructor(private logger:NGXLogger, private _httpService:PortfolioServiceService) { }

  ngOnInit(): void {

    this._httpService.getportfolio().subscribe((res : any[])=>
    {
   // this.logger.debug(res);
    this.getBalance = res;
    });

  }

  elements: any = [
    {id: 1, first: 'T-Bill', last: 'Govt of Ind', handle: 200},
    {id: 2, first: 'Corporate Bonds', last: 'Reliance', handle: 1000},
    {id: 3, first: 'Commercial Paper', last: 'Flipkart', handle: 500},
  ];

  headElements = ['ISIN', 'Security Type', 'Issuer', 'Quantity'];



}

