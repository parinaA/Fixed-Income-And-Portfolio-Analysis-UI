import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent} from "./page/page.component";

import {FormComponent} from "./form/form.component";
import {HistoryComponent} from "./history/history.component";
import {GeneratetradeComponent } from "./generatetrade/generatetrade.component";
import { generate } from 'rxjs';
import {PortfolioComponent} from "./portfolio/portfolio.component"


const routes: Routes = [
    {path : 'page' , component: PageComponent},
    {path : 'form' , component: FormComponent},
    {path : 'history' , component: HistoryComponent},
    {path : 'generate' , component: GeneratetradeComponent},
    {path : 'portfolio' , component: PortfolioComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [PageComponent ,FormComponent , HistoryComponent , GeneratetradeComponent];
