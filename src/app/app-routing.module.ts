import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent} from "./page/page.component";

import {FormComponent} from "./form/form.component";
import {HistoryComponent} from "./history/history.component";
import {FinPortfolioComponent} from "./fin-portfolio/fin-portfolio.component";


const routes: Routes = [
    {path : 'page' , component: PageComponent},
    {path : 'form' , component: FormComponent},
    {path : 'history' , component: HistoryComponent},
    {path : 'finalportfolio' , component: FinPortfolioComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [PageComponent ,FormComponent , HistoryComponent];
