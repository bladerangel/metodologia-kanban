import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Quadro } from '../../modelos/quadro';
import { EventosService } from '../../servicos/eventos.service';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent implements OnInit {

  constructor(
    private eventosService: EventosService
  ) { }

  @Input() quadro: Quadro;
  @Output() eventoRemoverQuadro = new EventEmitter();

  ngOnInit() {
  }

  removerQuadro() {
    this.eventoRemoverQuadro.emit(this.quadro.id);

  }

  abrirModal() {
    this.eventosService.get('abrirModal').emit({ modo: 'edicao', quadro: this.quadro });
  }

}
