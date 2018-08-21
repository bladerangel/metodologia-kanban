import { Component, OnInit } from '@angular/core';

import { QuadroService } from '../../servicos/quadro.service';
import { ListaService } from '../../../lista/servicos/lista.service';
import { CaixaModalService } from '../../../compartilhado/caixa-modal/servicos/caixaModal.service';
import { Quadro } from '../../modelos/quadro';
import { ListaObrigatoria, Lista } from '../../../lista/modelos/lista';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.css']
})
export class QuadrosComponent implements OnInit {

  constructor(
    private quadroService: QuadroService,
    private listaService: ListaService,
    private caixaModalService: CaixaModalService
  ) { }

  quadros: Quadro[];

  /*
  carrega todos os quadros ao iniciar o componente
  */
  ngOnInit() {
    this.quadroService.getQuadros()
      .subscribe(quadros => this.quadros = quadros);
  }

  /*
  invoca evento para abrir modal
  */
  adicionarQuadro() {
    this.caixaModalService.emitirEvento({ modo: 'criacao', componente: 'quadro', formulario: {} });
  }

  /*
  inseri quadro sem precisar atualizar todos os quadros
  ao salvar um quadro cria-se as listas obrigatorias
  edita nome do quadro
  */
  gerenciarQuadros(dados: any) {
    if (dados.modo === 'criacao') {
      this.quadroService.salvarQuadro(new Quadro(null, dados.formulario.nome))
        .subscribe(quadro => {
          this.quadros.push(quadro);
          Object.values(ListaObrigatoria).forEach(lista =>
            this.listaService.salvarLista(new Lista(null, lista, quadro.id)).subscribe());
        });
    } else {
      this.quadroService.renomearQuadro(dados.formulario).subscribe();
    }
  }

  /*
  remove quadro sem precisar atualizar todos os quadros
  */
  removerQuadro(quadroId: number) {
    this.quadros.splice(this.quadros.findIndex((quadro) => quadro.id === quadroId), 1);
    this.quadroService.removerQuadro(quadroId).subscribe();
  }
}
