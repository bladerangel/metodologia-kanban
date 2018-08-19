import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AtividadeService } from '../../../atividade/servicos/atividade.service';
import { Lista } from '../../modelos/lista';
import { Atividade } from '../../../atividade/modelos/atividade';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(
    private atividadeService: AtividadeService
  ) { }
  @Input() lista: Lista;
  @Output() eventoAtividadeMovida = new EventEmitter();
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
    this.atividadeService.salvarAtividade(new Atividade(null, 'teste', 'descricao', this.lista.quadroId, this.lista.id))
      .subscribe(atividade => this.atualizarAtividades());
    //this.lista.atividades.push(new Atividade(null,'aew','aaa'));
  }

  atualizarAtividades() {
    this.atividadeService.getAtividades(this.lista.id)
      .subscribe(atividades => this.atividades = atividades);
  }

  removerAtividade(){
    this.atualizarAtividades();
  }

}
