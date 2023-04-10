import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InformacionComponent } from './informacion/informacion.component';
import { CryptomonedaComponent } from './cryptomoneda/cryptomoneda.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    CryptomonedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    InformacionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
