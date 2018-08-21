import { Component, OnInit, ElementRef, ViewChild, Renderer2, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

import { ConfirmacaoModalService } from '../../servicos/confirmacao-modal.service';
import { ListaComAtividades } from '../../../../lista/modelos/listaComAtividades';

@Component({
  selector: 'app-confirmacao-modal',
  templateUrl: './confirmacao-modal.component.html',
  styleUrls: ['./confirmacao-modal.component.css']
})
export class ConfirmacaoModalComponent implements OnInit, OnDestroy {

  constructor(
    private render: Renderer2,
    private confirmacaoModalService: ConfirmacaoModalService
  ) { }

  @Output() eventoEscolherOpcao = new EventEmitter<any>();
  @ViewChild('modal') modal: ElementRef;
  dados: any;
  @Input() listasComAtividades: ListaComAtividades[];
  listaComAtividadesSelecionada: ListaComAtividades;
  listasComAtividadesExibidas: ListaComAtividades[];

  /*
  carrega dados do formulario dinamicamente
  escuta evento que pode ser disparado por qualquer componente
  */
  ngOnInit() {
    this.confirmacaoModalService
      .escutarEvento((dados) => {
        this.dados = dados;
        this.listasComAtividadesExibidas = this.listasComAtividades.filter((listaComAtividades => listaComAtividades !== this.dados));
        this.abrirModal();
      });
  }

  /*
  alterar o estilo do modal para ser exibido
  */
  abrirModal() {
    this.render.setStyle(this.modal.nativeElement, 'display', 'block');
  }

  /*
  alterar o estilo do modal para ser fechado
  */
  fecharModal() {
    this.render.setStyle(this.modal.nativeElement, 'display', 'none');
  }

  /*
  avisa qualquer componente sobre a opcao selecionada
  */
  deletar() {
    this.eventoEscolherOpcao.emit({ listaComAtividades: this.dados, modo: 'deletar' });
    this.fecharModal();
  }

  /*
  avisa qualquer componente sobre a opcao selecionada
  */
  mover() {
    if (this.listaComAtividadesSelecionada) {
      this.eventoEscolherOpcao.emit({
        listaComAtividades: this.dados,
        listaComAtividadesSelecionada: this.listaComAtividadesSelecionada,
        modo: 'mover'
      });
      this.fecharModal();
    }
  }

  /*
  remove evento ao sair do componente
  */
  ngOnDestroy() {
    this.confirmacaoModalService.removerEvento();
  }

}
