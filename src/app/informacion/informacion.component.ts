import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscarCriptoService } from '../service/buscar-cripto.service';
import { Crypto } from '../interfaces/Crypto-info';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
})
export class InformacionComponent {

  Crypto!: Crypto;
  filtercoins: Crypto[] = [];

  constructor ( 
    private activatedRoute: ActivatedRoute,
    private servicio: BuscarCriptoService
    ) {}

  ngOnInit(): void {
    
    this.activatedRoute.params
    .subscribe( params =>{
      console.log( params['id']);

         this.servicio.buscarCrypto(params['id'])
         .subscribe( Crypto => {
           console.log(Crypto);
           

          this.Crypto = Crypto;
          
         })
    })
  }
   
}
