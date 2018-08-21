import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadroRoutingModule } from './quadro-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';

import { QuadrosComponent } from './componentes/quadros/quadros.component';
import { QuadroComponent } from './componentes/quadro/quadro.component';
import { QuadroDetalheComponent } from './componentes/quadro-detalhe/quadro-detalhe.component';
import { ListaComponent } from '../lista/componentes/lista/lista.component';
import { AtividadeComponent } from '../atividade/componentes/atividade/atividade.component';
import { CaixaModalComponent } from '../compartilhado/caixa-modal/componentes/caixa-modal/caixa-modal.component';
import { ConfirmacaoModalComponent } from '../compartilhado/confirmacao-modal/componentes/confirmacao-modal/confirmacao-modal.component';
import { CaixaToastComponent } from '../compartilhado/caixa-toast/componentes/caixa-toast/caixa-toast.component';

@NgModule({
  imports: [
    CommonModule,
    QuadroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgDragDropModule.forRoot()
  ],
  declarations: [
    QuadrosComponent,
    QuadroComponent,
    QuadroDetalheComponent,
    ListaComponent,
    AtividadeComponent,
    CaixaModalComponent,
    ConfirmacaoModalComponent,
    CaixaToastComponent
  ]
})
export class QuadroModule { }
