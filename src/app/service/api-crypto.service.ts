import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCryptoService {

  private coins_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

  constructor( private http: HttpClient) {}

  public getAllCoins(): Observable<any>{
    return this.http.get( this.coins_url);
  }

}
