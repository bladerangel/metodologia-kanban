import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';


import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CaixaModalService } from '../../servicos/caixaModal.service';

@Component({
  selector: 'app-caixa-modal',
  templateUrl: './caixa-modal.component.html',
  styleUrls: ['./caixa-modal.component.css']
})
export class CaixaModalComponent implements OnInit {

  constructor(
    private render: Renderer2,
    private caixaModalService: CaixaModalService,
    private contruirFormulario: FormBuilder) { }

  @Output() eventoSubmeterFormulario = new EventEmitter<any>();
  @ViewChild('modal') modal: ElementRef;
  formulario: FormGroup;
  dados: any;

  ngOnInit() {

    this.formulario = this.contruirFormulario.group({
      nome: ['', Validators.required]
    });
    this.caixaModalService.escutarEvento((dados) => {
      this.dados = dados;
      console.log('aki', dados);
      if (this.dados.componente == 'atividade') {
        this.formulario.addControl('descricao', new FormControl());
        if (this.dados.modo == 'edicao') {
          this.formulario.patchValue({ nome: this.dados.formulario.nome, descricao: this.dados.formulario.descricao });
        }
      } else {
        if (this.dados.modo == 'edicao') {
          this.formulario.patchValue({ nome: this.dados.formulario.nome })
        }
      }
      this.abrirModal();
    });
  }

  abrirModal() {
    this.render.setStyle(this.modal.nativeElement, 'display', 'block');

  }

  fecharModal() {
    this.formulario.reset();
    this.render.setStyle(this.modal.nativeElement, 'display', 'none');
  }

  submeterFormulario() {
    this.dados.formulario.nome = this.formulario.value.nome;
    if (this.dados.componente == 'atividade') {
      this.dados.formulario.descricao = this.formulario.value.descricao;
    }
    this.eventoSubmeterFormulario.emit(this.dados);
    this.fecharModal();
  }

  ngOnDestroy() {
    this.caixaModalService.removerEvento();
  }

}
