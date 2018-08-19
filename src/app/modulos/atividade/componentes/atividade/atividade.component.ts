import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { AtividadeService } from '../../servicos/atividade.service';
import { Atividade } from '../../modelos/atividade';
import { CaixaToastService } from '../../../compartilhado/caixa-toast/servicos/caixaToast.service';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  constructor(
    private caixaToastService: CaixaToastService
  ) { }
  @Input() atividade: Atividade;
  @Output() eventoRemoverAtividade = new EventEmitter();

  ngOnInit() {

  }

  exibirDescricao() {
    this.caixaToastService.emitirEvento({ atividade: this.atividade.titulo, mensagem: this.atividade.descricao });
  }

  removerAtividade() {
    this.eventoRemoverAtividade.emit(this.atividade.id);

  }
}
