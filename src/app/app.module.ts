
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import {AppRoutingModule , RoutingComponents} from "./app-routing.module";

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { GeneratetradeComponent } from './generatetrade/generatetrade.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger'; 




@NgModule({
  declarations: [
    AppComponent,
   RoutingComponents,
   GeneratetradeComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(), 
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: '/users/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
