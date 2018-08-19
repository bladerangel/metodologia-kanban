import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AtividadeService } from '../../../atividade/servicos/atividade.service';
import { Lista } from '../../modelos/lista';
import { Atividade } from '../../../atividade/modelos/atividade';
import { CaixaModalService } from '../../../compartilhado/caixa-modal/servicos/caixaModal.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(
    private atividadeService: AtividadeService,
    private caixaModalService: CaixaModalService
  ) { }
  @Input() lista: Lista;
  @Output() eventoAtividadeMovida = new EventEmitter();
  @Output() eventoListaRemovida = new EventEmitter();

  atividades: Atividade[];

  ngOnInit() {
    this.atualizarAtividades();
  }

  onItemDrop(e: any) {
    e.dragData.listaId = this.lista.id;
    this.atividadeService.moverAtividade(e.dragData).subscribe(atividade => this.atualizarAtividades());
    this.eventoAtividadeMovida.emit();
  }

  isDropAllowed = (dragData: any) => {

    return !this.atividades.includes(dragData);
  }

  adicionarAtividade() {
    this.caixaModalService.emitirEvento({ modo: 'criacao', componente: 'atividade', lista: this.lista, formulario: {} });
  }

  atualizarAtividades() {
    this.atividadeService.getAtividades(this.lista.id)
      .subscribe(atividades => this.atividades = atividades);
  }

  removerAtividade(id: number) {
    this.atividades.splice(this.atividades.findIndex((atividade) => atividade.id == id), 1);
    this.atividadeService.removerAtividade(id).subscribe();
  }

  removerLista() {
    this.eventoListaRemovida.emit(this.lista.id);
  }

}
