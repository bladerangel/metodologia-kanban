import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuadroService } from '../../servicos/quadro.service';
import { ListaService } from '../../servicos/lista.service';
import { Lista } from '../../modelos/lista';
import { Atividade } from '../../modelos/atividade';
import { AtividadeService } from '../../servicos/atividade.service';

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

  moverAtividade(){
    this.atualizarListas();
  }

  atualizarListas(){
    this.listaService.getLista(this.activatedRoute.snapshot.params['id'])
      .subscribe(listas => this.listas = listas);
  }

}
