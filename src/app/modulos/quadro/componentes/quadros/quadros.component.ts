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
    private caixaModalService: CaixaModalService,
    private listaService: ListaService
  ) { }

  quadros: Quadro[];

  ngOnInit() {
    this.quadroService.getQuadros()
      .subscribe(quadros => this.quadros = quadros);
  }

  adicionarQuadro() {
    this.caixaModalService.emitirEvento({ modo: 'criacao', componente: 'quadro', formulario: {} });
  }

  gerenciarQuadro(dados: any) {
    if (dados.modo == 'criacao') {
      this.quadroService.salvarQuadro(new Quadro(null, dados.formulario.nome))
        .subscribe(quadro => {
          //inseri quadro sem precisar atualizar todos os quadros
          this.quadros.push(quadro);
          //ao salvar um quadro cria-se as listas obrigatorias
          for (const lista in ListaObrigatoria) {
            this.listaService.salvarLista(new Lista(null, lista, quadro.id)).subscribe();
          }
        });
    }
    else {
      //edita nome do quadro
      this.quadroService.renomearQuadro(dados.formulario).subscribe();
    }


  }

  removerQuadro(id: number) {
    //remove quadro sem precisar atualizar todos os quadros
    this.quadros.splice(this.quadros.findIndex((quadro) => quadro.id == id), 1);
    this.quadroService.removerQuadro(id).subscribe();
  }
}
