import { Component, OnInit } from '@angular/core';
import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elements: any = [
    {id: 1, first: 'T-Bill', last: '+ INR 23,000', handle: '-', total: 'INR 23,000'},
    {id: 2, first: 'Corporate Bonds', last: '+ INR 6,000', handle: '+ INR 10,000', total: 'INR 16,000'},
    {id: 3, first: 'Commercial Paper', last: '+ INR 3,000', handle: '- INR 1,000', total: 'INR 2,000'},
  ];

  headElements = ['ISIN', 'Security', 'Coupon Income', 'Capital Gains/Losses', 'Total'];

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Overall Profit by Security' }
  ];

  public chartLabels: Array<any> = ['T-Bill', 'CD', 'Corp Bond', 'Govt bond', 'CP', 'Bond'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


}







