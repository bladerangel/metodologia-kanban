import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Atividade } from '../modelos/atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = 'http://localhost:3000/atividades/';

  salvarAtividade(atividade: Atividade) {
    return this.httpClient.post<Atividade>(this.url, atividade);
  }

  moverAtividade(atividade: Atividade) {
    return this.httpClient.put<Atividade>(this.url + atividade.id, atividade);
  }

  removerAtividade(atividadeId: number) {
    return this.httpClient.delete(this.url + atividadeId);
  }

}
