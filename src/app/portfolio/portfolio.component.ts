import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elements: any = [
    {id: 1, first: 'T-Bill', last: 'Govt of Ind', handle: 200},
    {id: 2, first: 'Corporate Bonds', last: 'Reliance', handle: 1000},
    {id: 3, first: 'Commercial Paper', last: 'Flipkart', handle: 500},
  ];

  headElements = ['ISIN', 'Security Type', 'Issuer', 'Quantity'];



}

