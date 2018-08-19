import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { EventosService } from '../../servicos/eventos.service';

@Component({
  selector: 'app-caixa-modal',
  templateUrl: './caixa-modal.component.html',
  styleUrls: ['./caixa-modal.component.css']
})
export class CaixaModalComponent implements OnInit {

  constructor(private render: Renderer2, private eventosService: EventosService) { }

  @Output() getForm = new EventEmitter<any>();
  @ViewChild('modal') modal: ElementRef;
  nome: string;
  data: any;
  ngOnInit() {
    this.eventosService.get('abrirModal')
      .subscribe((data) => {
        this.data = data;
        if (this.data.modo == 'criacao')
          this.nome = '';
        else if (this.data.hasOwnProperty('quadro'))
          this.nome = this.data.quadro.nome;
        this.abrirModal();
      });
  }

  abrirModal() {
    this.render.setStyle(this.modal.nativeElement, 'display', 'block');

  }

  fecharModal() {
    this.render.setStyle(this.modal.nativeElement, 'display', 'none');

  }

  submeterFormulario() {
    if (this.data.hasOwnProperty('quadro')) {
      this.data.quadro.nome = this.nome;
      this.getForm.emit(this.data);
    }
    else {
      this.data.nome = this.nome;
      this.getForm.emit(this.data);
    }
    this.fecharModal();
  }
  
  ngOnDestroy() {
    //this.eventosService.get('abrirModal').unsubscribe();
  }

}
