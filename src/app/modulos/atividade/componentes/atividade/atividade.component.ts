import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { AtividadeService } from '../../servicos/atividade.service';
import { Atividade } from '../../modelos/atividade';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  constructor(
    private atividadeService: AtividadeService
  ) { }
  @Input() atividade: Atividade;
  @Output() eventoRemoverAtividade = new EventEmitter();

  ngOnInit() {

  }

  removerAtividade() {
    this.atividadeService.removerAtividade(this.atividade.id).subscribe(() => this.eventoRemoverAtividade.emit());
  }
}
