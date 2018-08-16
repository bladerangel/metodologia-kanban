import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadrosComponent } from './componentes/quadros/quadros.component';
import { CabecalhoComponent } from './componentes/compartilhados/cabecalho/cabecalho.component';
import { QuadroComponent } from './componentes/quadro/quadro.component';
import { QuadroDetalheComponent } from './componentes/quadro-detalhe/quadro-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    QuadrosComponent,
    CabecalhoComponent,
    QuadroComponent,
    QuadroDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
