import { Injectable } from '@angular/core';
import { Lista } from '../modelos/lista';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = 'http://localhost:3000/';

  getLista(quadroId: number) {
    return this.httpClient.get<Lista[]>(this.url + 'quadros/' + quadroId + '/listas');
  }

  salvarLista(lista: Lista) {
    return this.httpClient.post<Lista>(this.url + 'listas', lista);
  }
}
