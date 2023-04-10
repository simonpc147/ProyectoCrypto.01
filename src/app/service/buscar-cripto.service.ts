import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crypto } from '../interfaces/Crypto-info';

@Injectable({
  providedIn: 'root'
})
export class BuscarCriptoService {

  private coins_url = 'https://api.coingecko.com/api/v3';

  constructor( private http : HttpClient) { }

  buscarCrypto( id: string ): Observable<Crypto>{
    
    const url = `${this.coins_url}/coins/${ id }`
    return this.http.get<Crypto>( url )
  }

}
