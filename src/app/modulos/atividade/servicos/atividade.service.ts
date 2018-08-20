import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Atividade } from '../modelos/atividade';
import { ListaComAtividades } from '../../lista/modelos/listaComAtividades';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = 'http://localhost:3000/';

  salvarAtividade(atividade: Atividade) {
    return this.httpClient.post<Atividade>(this.url + 'atividades', atividade);
  }

  getAtividades(listaId: number) {
    
  }

  getTodasAtividades(quadroId: number){
    return this.httpClient.get<any>(this.url + 'quadros/' + quadroId + '/listas?_embed=atividades');
   
  }

  removerAtividade(atividadeId: number) {
    return this.httpClient.delete(this.url + 'atividades/' + atividadeId);
  }

  moverAtividade(atividade: Atividade) {
    return this.httpClient.put<Atividade>(this.url + 'atividades/'+ atividade.id, atividade);
  }
}
