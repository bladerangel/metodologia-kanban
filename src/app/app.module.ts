import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { QuadrosComponent } from './modulos/quadro/componentes/quadros/quadros.component';
import { QuadroComponent } from './modulos/quadro/componentes/quadro/quadro.component';
import { QuadroDetalheComponent } from './modulos/quadro/componentes/quadro-detalhe/quadro-detalhe.component';
import { ListaComponent } from './modulos/lista/componentes/lista/lista.component';
import { AtividadeComponent } from './modulos/atividade/componentes/atividade/atividade.component';
import { CaixaModalComponent } from './modulos/compartilhado/caixa-modal/componentes/caixa-modal/caixa-modal.component';
import { CabecalhoComponent } from './modulos/compartilhado/cabecalho/cabecalho.component';
import { CaixaToastComponent } from './modulos/compartilhado/caixa-toast/componentes/caixa-toast/caixa-toast.component';
import { ConfirmacaoModalComponent } from './modulos/compartilhado/confirmacao-modal/componentes/confirmacao-modal/confirmacao-modal.component';
import { SobreComponent } from './modulos/sobre/componentes/sobre/sobre.component';



@NgModule({
  declarations: [
    AppComponent,
    QuadrosComponent,
    CabecalhoComponent,
    QuadroComponent,
    QuadroDetalheComponent,
    CaixaModalComponent,
    ListaComponent,
    AtividadeComponent,
    CaixaToastComponent,
    ConfirmacaoModalComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgDragDropModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
