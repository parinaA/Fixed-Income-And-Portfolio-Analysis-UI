import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http:HttpClient) { }

  getprofitlosstable()
  {
    return this.http.get('whateverurlforprofitloss.com')
  }

   getrealizedprofit()
  {
    return this.http.get('whateverurlforrealizedprofit.com') 
  }

  getcouponsaccrued()
  {
    return this.http.get('whateverurlforcouponsweget.com')
  }
}

