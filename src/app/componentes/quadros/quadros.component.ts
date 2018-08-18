import { Component, OnInit } from '@angular/core';

import { QuadroService } from '../../servicos/quadro.service';
import { Quadro } from '../../modelos/quadro';
import { EventosService } from '../../servicos/eventos.service';
import { ListaService } from '../../servicos/lista.service';
import { Lista, ListaObrigatoria } from '../../modelos/lista';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.css']
})
export class QuadrosComponent implements OnInit {

  constructor(
    private quadroService: QuadroService,
    private eventosService: EventosService,
    private listaService: ListaService
  ) { }

  quadros: Quadro[];

  ngOnInit() {
    this.atualizarQuadros();
  }

  abrirModal() {
    this.eventosService.get('abrirModal').emit({ modo: 'criacao' });
  }

  gerenciarQuadro($event: any) {
    if ($event.modo == 'criacao')
      this.quadroService.salvarQuadro(new Quadro(null, $event.nome)).subscribe(quadro => {
        this.atualizarQuadros();
        this.listaService.salvarLista(new Lista(null, ListaObrigatoria.Fazer, quadro.id)).subscribe();
        this.listaService.salvarLista(new Lista(null, ListaObrigatoria.Fazendo, quadro.id)).subscribe();
        this.listaService.salvarLista(new Lista(null, ListaObrigatoria.Feito, quadro.id)).subscribe();
      });

    else
      this.quadroService.renomearQuadro($event.quadro).subscribe(quadro => this.atualizarQuadros());
  }

  removerQuadro(id: number) {
    this.quadroService.removerQuadro(id).subscribe(quadro => this.atualizarQuadros());
  }

  atualizarQuadros() {
    this.quadroService.getQuadros()
      .subscribe(quadros => this.quadros = quadros);
  }
}
