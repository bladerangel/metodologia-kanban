import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListaService } from '../../../lista/servicos/lista.service';
import { Lista } from '../../../lista/modelos/lista';


@Component({
  selector: 'app-quadro-detalhe',
  templateUrl: './quadro-detalhe.component.html',
  styleUrls: ['./quadro-detalhe.component.css']
})
export class QuadroDetalheComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private listaService: ListaService
  ) { }

  listas: Lista[];

  ngOnInit() {
    this.atualizarListas();
  }

  moverAtividade() {
    this.atualizarListas();
  }

  atualizarListas() {
    this.listaService.getLista(this.activatedRoute.snapshot.params['id'])
      .subscribe(listas => this.listas = listas);
  }

}
