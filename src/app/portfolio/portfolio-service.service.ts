import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http:HttpClient) { }

  getportfolio()
  {
    return this.http.get('whateverurlforportfolio.com')
  }
}

