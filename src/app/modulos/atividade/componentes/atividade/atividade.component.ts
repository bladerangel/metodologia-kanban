import { Component, Input, EventEmitter, Output } from '@angular/core';

import { CaixaToastService } from '../../../compartilhado/caixa-toast/servicos/caixaToast.service';
import { Atividade } from '../../modelos/atividade';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent {

  constructor(
    private caixaToastService: CaixaToastService
  ) { }

  @Input() atividade: Atividade;
  @Output() eventoRemoverAtividade = new EventEmitter<number>();

  /*
  invoca evento para exibir o toast
  */
  exibirDescricao() {
    this.caixaToastService.emitirEvento(
      {
        atividade: this.atividade.titulo,
        mensagem: this.atividade.descricao
      });
  }

  /*
  avisa ao componente lista que foi removida a atividade
  */
  removerAtividade() {
    this.eventoRemoverAtividade.emit(this.atividade.id);
  }
}
