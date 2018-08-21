import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lista } from '../modelos/lista';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = 'http://localhost:3000/listas/';

  salvarLista(lista: Lista): Observable<Lista> {
    return this.httpClient.post<Lista>(this.url, lista);
  }

  removerLista(id: number): Observable<any> {
    return this.httpClient.delete(this.url + id);
  }
}
