import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadrosComponent } from './componentes/quadros/quadros.component';
import { CabecalhoComponent } from './componentes/compartilhados/cabecalho/cabecalho.component';
import { QuadroComponent } from './componentes/quadro/quadro.component';
import { QuadroDetalheComponent } from './componentes/quadro-detalhe/quadro-detalhe.component';
import { CaixaModalComponent } from './componentes/compartilhados/caixa-modal/caixa-modal.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { AtividadeComponent } from './componentes/atividade/atividade.component';


@NgModule({
  declarations: [
    AppComponent,
    QuadrosComponent,
    CabecalhoComponent,
    QuadroComponent,
    QuadroDetalheComponent,
    CaixaModalComponent,
    ListaComponent,
    AtividadeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
