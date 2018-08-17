import { Component, OnInit } from '@angular/core';

import { QuadroService } from '../../servicos/quadro.service';
import { Quadro } from '../../modelos/quadro';
import { EventosService } from '../../servicos/eventos.service';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.css']
})
export class QuadrosComponent implements OnInit {

  constructor(private quadroService: QuadroService, private eventosService: EventosService) { }

  quadros: Quadro[];

  ngOnInit() {
    this.atualizarQuadros();
  }

  abrirModal() {
    this.eventosService.get('abrirModal').emit({ modo: 'criacao' });
  }

  gerenciarQuadro($event: any) {
    if ($event.modo == 'criacao')
      this.quadroService.salvarQuadro(new Quadro(null, $event.nome, [])).subscribe(quadro => this.atualizarQuadros());
    else
      this.quadroService.renomearQuadro($event.quadro).subscribe(quadro => this.atualizarQuadros());
  }

  removerQuadro(id: number){
    this.quadroService.removerQuadro(id).subscribe(quadro => this.atualizarQuadros());
  }

  atualizarQuadros() {
    this.quadroService.getQuadros()
      .subscribe(quadros => this.quadros = quadros);
  }
}
