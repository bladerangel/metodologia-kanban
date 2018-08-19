import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDragDropModule } from 'ng-drag-drop';

import { QuadrosComponent } from './modulos/quadro/componentes/quadros/quadros.component';
import { CabecalhoComponent } from './modulos/compartilhado/componentes/cabecalho/cabecalho.component';
import { QuadroComponent } from './modulos/quadro/componentes/quadro/quadro.component';
import { QuadroDetalheComponent } from './modulos/quadro/componentes/quadro-detalhe/quadro-detalhe.component';
import { CaixaModalComponent } from './modulos/compartilhado/componentes/caixa-modal/caixa-modal.component';
import { ListaComponent } from './modulos/lista/componentes/lista/lista.component';
import { AtividadeComponent } from './modulos/atividade/componentes/atividade/atividade.component';


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
    AppRoutingModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
