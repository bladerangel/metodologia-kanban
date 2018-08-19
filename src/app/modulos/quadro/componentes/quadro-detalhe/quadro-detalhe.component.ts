import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListaService } from '../../../lista/servicos/lista.service';
import { AtividadeService } from '../../../atividade/servicos/atividade.service';
import { CaixaModalService } from '../../../compartilhado/caixa-modal/servicos/caixaModal.service';
import { Lista } from '../../../lista/modelos/lista';
import { Atividade } from '../../../atividade/modelos/atividade';


@Component({
  selector: 'app-quadro-detalhe',
  templateUrl: './quadro-detalhe.component.html',
  styleUrls: ['./quadro-detalhe.component.css']
})
export class QuadroDetalheComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private listaService: ListaService,
    private atividadeService: AtividadeService,
    private caixaModalService: CaixaModalService
  ) { }

  listas: Lista[];
  quadroId: number;

  ngOnInit() {
    this.quadroId = this.activatedRoute.snapshot.params['id'];
    this.atualizarListas();
  }

  moverAtividade() {
    this.atualizarListas();
  }

  gerenciarLista(dados: any) {
    if (dados.modo == 'criacao') {
      if (dados.componente == 'atividade') {
        this.atividadeService.salvarAtividade(new Atividade(null, dados.formulario.nome, dados.formulario.descricao, dados.lista.quadroId, dados.lista.id))
          .subscribe(atividade => this.atualizarListas());
      } else {
        this.listaService.salvarLista(new Lista(null, dados.formulario.nome, this.quadroId))
          .subscribe(lista => this.atualizarListas());
      }
    }
  }

  adicionarLista() {
    this.caixaModalService.emitirEvento({ modo: 'criacao', componente: 'lista', formulario: {} });
  }

  atualizarListas() {
    this.listaService.getListas(this.quadroId)
      .subscribe(listas => this.listas = listas);
  }

  removerLista(id: number) {
    this.listas.splice(this.listas.findIndex((quadro) => quadro.id == id), 1);
    this.listaService.removerLista(id).subscribe();
  }

}
