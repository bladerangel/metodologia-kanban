import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

import { CaixaToastService } from '../../servicos/caixaToast.service';

@Component({
  selector: 'app-caixa-toast',
  templateUrl: './caixa-toast.component.html',
  styleUrls: ['./caixa-toast.component.css']
})
export class CaixaToastComponent implements OnInit {

  constructor(
    private render: Renderer2,
    private caixaToastService: CaixaToastService
  ) { }

  @ViewChild('toast') toast: ElementRef;
  mensagem: string;
  esperaAnimacao: boolean = true;
  ngOnInit() {
    this.caixaToastService.escutarEvento((dados) => {
      if (this.esperaAnimacao) {
        this.esperaAnimacao = false;
        this.mensagem = 'Descricao da atividade ' + dados.atividade + ' : ' + dados.mensagem;
        this.abrirToast();
      }
    });
  }

  abrirToast() {
    this.render.addClass(this.toast.nativeElement, 'show');
    setTimeout(() => { this.render.removeClass(this.toast.nativeElement, 'show'); this.esperaAnimacao = true; }, 3000);

  }


  ngOnDestroy(): void {
    this.caixaToastService.removerEvento();

  }

}
