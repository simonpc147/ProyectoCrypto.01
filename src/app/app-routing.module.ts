import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { CryptomonedaComponent } from './cryptomoneda/cryptomoneda.component';

const routes: Routes = [
   {
    path: 'cryptomoneda',
    component: CryptomonedaComponent
  },
  {
    path: 'informacion/:id',
    component: InformacionComponent
  },
  {
    path: '**',
    redirectTo: 'cryptomoneda'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
