import { Component, OnInit } from '@angular/core';
import { ApiCryptoService } from '../service/api-crypto.service';
import { BuscarCriptoService } from '../service/buscar-cripto.service';
import { Crypto } from '../interfaces/Crypto-info';

@Component({
  selector: 'app-cryptomoneda',
  templateUrl: './cryptomoneda.component.html',
})
export class CryptomonedaComponent implements OnInit {

  filtercoins: Crypto[] = [];
  Crypto!: Crypto;
  Titles: string[] = ['#', 'Cripto', 'Precio', 'Precio de cambio', 'Volumen 24H ', "Ver..."];
  busquedaText: string = '';
  filteredCoints: Crypto[] = [];
  id: string = '';
  hayError: boolean = false;

  constructor(
    private service: ApiCryptoService,
    private servicio: BuscarCriptoService
    ) {}
  
  busquedaCoins() {
   this.filtercoins = this.Crypto.filter((service: { name: string; symbol: string; } ) => 
    service.name.toLowerCase().includes(this.busquedaText.toLowerCase()) ||
    service.symbol.toLowerCase().includes(this.busquedaText.toLowerCase())
  )}

 buscar() {
  this.hayError = false;

  this.servicio.buscarCrypto(this.id)
  .subscribe( ( Crypto ) => { 
    console.log(Crypto);
    this.Crypto = Crypto;

  }, (error: any) => {
    this.hayError = true;
    this.Crypto= this.Crypto;
  });
}
  ngOnInit(): void {
    this.service.getAllCoins().subscribe( res => {
      this.Crypto = res;
      this.filtercoins = res;
      console.log(this.Crypto)
    });
  }

}
