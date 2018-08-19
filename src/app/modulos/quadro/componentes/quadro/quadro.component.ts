import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CaixaModalService } from '../../../compartilhado/caixa-modal/servicos/caixaModal.service';
import { Quadro } from '../../modelos/quadro';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent implements OnInit {

  constructor(
    private caixaModalService: CaixaModalService
  ) { }

  @Input() quadro: Quadro;
  @Output() eventoRemoverQuadro = new EventEmitter();

  ngOnInit() {
  }

  removerQuadro() {
    this.eventoRemoverQuadro.emit(this.quadro.id);

  }

  editarQuadro() {
    this.caixaModalService.emitirEvento({ modo: 'edicao', componente: 'quadro', formulario: this.quadro });
  }

}
