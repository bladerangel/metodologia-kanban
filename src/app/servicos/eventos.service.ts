import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }

  private eventos: {
    [nomeEvento: string]: EventEmitter<any>
  } = {}

  get(nomeEvento: string): EventEmitter<any> {
    if (!this.eventos[nomeEvento])
      this.eventos[nomeEvento] = new EventEmitter<any>();
    return this.eventos[nomeEvento];
  }
}
