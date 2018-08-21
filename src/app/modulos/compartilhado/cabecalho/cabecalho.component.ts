import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  constructor(
    private renderizacao: Renderer2
  ) { }

  @ViewChild('menu') menu: ElementRef;

  /*
  verifica se menu encontra-se aberto, caso nao esteja o menu é aberto
  */
  abrirMenu() {
    if (this.fecharMenu()) {
      this.renderizacao.addClass(this.menu.nativeElement, 'responsivo');
    }
  }

  fecharMenu(): boolean {
    if (this.menu.nativeElement.classList.contains('responsivo')) {
      this.renderizacao.removeClass(this.menu.nativeElement, 'responsivo');
      return false;
    }
    return true;
  }
}
