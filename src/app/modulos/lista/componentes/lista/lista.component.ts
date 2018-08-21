import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AtividadeService } from '../../../atividade/servicos/atividade.service';
import { CaixaModalService } from '../../../compartilhado/caixa-modal/servicos/caixaModal.service';
import { ListaComAtividades } from '../../modelos/listaComAtividades';
import { ConfirmacaoModalService } from '../../../compartilhado/confirmacao-modal/servicos/confirmacao-modal.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  constructor(
    private atividadeService: AtividadeService,
    private caixaModalService: CaixaModalService,
    private confirmacaoModalService: ConfirmacaoModalService
  ) { }

  @Input() listaComAtividades: ListaComAtividades;
  @Output() eventoMoverAtividade = new EventEmitter<any>();
  @Output() eventoRemoverLista = new EventEmitter<number>();

  /*
  movimenta atividade para outra lista
  avisa ao componente quadro-detalhe que foi movida a atividade
  */
  moverAtividade(evento: any) {
    this.eventoMoverAtividade.emit({ listaId: evento.dragData.listaId, atividadeId: evento.dragData.id });
    evento.dragData.listaId = this.listaComAtividades.lista.id;
    this.listaComAtividades.atividades.push(evento.dragData);
    this.atividadeService.moverAtividade(evento.dragData).subscribe();
  }

  /*
  verifica quais listas estao habilitadas para mover a atividade
  */
  movimentoHabilitado = (evento: any) => {
    return !this.listaComAtividades.atividades.includes(evento);
  }

  /*
  invoca evento para abrir modal
  */
  adicionarAtividade() {
    this.caixaModalService.emitirEvento({ modo: 'criacao', componente: 'atividade', lista: this.listaComAtividades.lista, formulario: {} });
  }


  /*
  remove atividade sem precisar atualizar todas as atividades
  */
  removerAtividade(atividadeId: number) {
    this.listaComAtividades.atividades.splice(this.listaComAtividades.atividades.findIndex((atividade) => atividade.id === atividadeId), 1);
    this.atividadeService.removerAtividade(atividadeId).subscribe();
  }

  /*
  avisa componente quadro-detalhe para remove lista
  invoca evento para abrir modal de confirmacao
  */
  removerLista() {
    if (this.listaComAtividades.atividades.length === 0) {
      this.eventoRemoverLista.emit(this.listaComAtividades.lista.id);
    } else {
      this.confirmacaoModalService.emitirEvento(this.listaComAtividades);
    }
  }
}
