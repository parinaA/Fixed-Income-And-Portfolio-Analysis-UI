import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GenerateTradeServiceService {

  constructor(private http:HttpClient) { }

  //get // fetch // JSON Server URL here for Fetch the data
getUserDetails() {
  return  'Hello, welcome your service...';
}

}