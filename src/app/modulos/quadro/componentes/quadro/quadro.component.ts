import { Component, Input, EventEmitter, Output } from '@angular/core';

import { CaixaModalService } from '../../../compartilhado/caixa-modal/servicos/caixaModal.service';
import { Quadro } from '../../modelos/quadro';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent {

  constructor(
    private caixaModalService: CaixaModalService
  ) { }

  @Input() quadro: Quadro;
  @Output() eventoRemoverQuadro = new EventEmitter<number>();

  /*
  avisa ao componente quadros que foi removido o quadro
  */
  removerQuadro() {
    this.eventoRemoverQuadro.emit(this.quadro.id);
  }

  /*
  invoca evento para abrir modal
  */
  editarQuadro() {
    this.caixaModalService.emitirEvento(
      {
        modo: 'edicao',
        componente: 'quadro',
        formulario: this.quadro
      });
  }

}
