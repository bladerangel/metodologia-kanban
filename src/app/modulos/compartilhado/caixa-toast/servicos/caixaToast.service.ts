import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaixaToastService {

  constructor() { }
  private evento: EventEmitter<any>;

   escutarEvento(tarefa: Function) {
    this.evento = new EventEmitter<any>();
    this.evento.subscribe(tarefa);

  }

  emitirEvento(dados: any) {
    this.evento.emit(dados);
  }

  removerEvento() {
    this.evento.unsubscribe();
  }

}
