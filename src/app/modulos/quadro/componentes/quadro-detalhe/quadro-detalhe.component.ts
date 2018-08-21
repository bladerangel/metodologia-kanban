import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListaService } from '../../../lista/servicos/lista.service';
import { AtividadeService } from '../../../atividade/servicos/atividade.service';
import { CaixaModalService } from '../../../compartilhado/caixa-modal/servicos/caixaModal.service';
import { ListaComAtividades } from '../../../lista/modelos/listaComAtividades';
import { Atividade } from '../../../atividade/modelos/atividade';
import { Lista } from '../../../lista/modelos/lista';

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

  quadroId: number;
  listasComAtividades: ListaComAtividades[];

  /*
  carrega todos as listas com suas atividades do quadro dependendo do seu id
  */
  ngOnInit() {
    this.quadroId = this.activatedRoute.snapshot.params['id'];
    this.atividadeService.getTodasAtividades(this.quadroId)
      .subscribe(listasComAtividades => {
        this.listasComAtividades = listasComAtividades
          .map(dados => {
            const objeto = { lista: dados, atividades: dados.atividades };
            delete objeto.lista.atividades;
            return objeto;
          });
      }
      );
  }

  /*
  mover atividade sem precisar atualizar todas as listas e atividades
  */
  moverAtividade(dados: any) {
    const lista = this.listasComAtividades.find(dado => dado.lista.id === dados.listaId);
    lista.atividades.splice(lista.atividades.findIndex((atividade) => atividade.id === dados.atividadeId), 1);
  }

  /*
  inseri lista sem precisar atualizar todas as listas
  ao salvar um lista cria-se as atividades vazias
  */
  gerenciarListas(dados: any) {
    if (dados.modo === 'criacao') {
      if (dados.componente === 'atividade') {
        this.atividadeService.salvarAtividade(
          new Atividade(null, dados.formulario.nome, dados.formulario.descricao, dados.lista.quadroId, dados.lista.id))
          .subscribe((atividade) => {
            const lista = this.listasComAtividades.find(dado => dado.lista.id === dados.lista.id);
            lista.atividades.push(atividade);
          });
      } else {
        this.listaService.salvarLista(new Lista(null, dados.formulario.nome, this.quadroId))
        .subscribe((lista) => {
          this.listasComAtividades.push({ lista: lista, atividades: [] });
        });
      }
    }
  }

  /*
  remove lista sem precisar atualizar todas as listas
  remove lista antiga e move todas as atividades para nova lista sem precisar atualizar todas as listas
  */
  escolherOpcao(dados: any) {
    if (dados.modo === 'deletar') {
      this.removerLista(dados.listaComAtividades.lista.id);
    } else {
      dados.listaComAtividades.atividades.forEach(atividade => {
        atividade.listaId = dados.listaComAtividadesSelecionada.lista.id;
        dados.listaComAtividadesSelecionada.atividades.push(atividade);
        this.atividadeService.moverAtividade(atividade).subscribe();
      });
      this.removerLista(dados.listaComAtividades.lista.id);
    }
  }

  /*
  invoca evento para abrir modal
  */
  adicionarLista() {
    this.caixaModalService.emitirEvento({ modo: 'criacao', componente: 'lista', formulario: {} });
  }

  /*
  remove lista sem precisar atualizar todas as listas
  */
  removerLista(listaId: number) {
    this.listasComAtividades.splice(this.listasComAtividades.findIndex((lista) => lista.lista.id === listaId), 1);
    this.listaService.removerLista(listaId).subscribe();
  }

}
