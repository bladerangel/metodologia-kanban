import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quadro } from '../modelos/quadro';

@Injectable({
  providedIn: 'root'
})
export class QuadroService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = 'http://localhost:3000/';

  getQuadros() {
    return this.httpClient.get<Quadro[]>(this.url + 'quadros');
  }

  salvarQuadro(quadro: Quadro) {
    return this.httpClient.post<Quadro>(this.url + 'quadros', quadro);
  }

  removerQuadro(id: number) {
    return this.httpClient.delete(this.url + 'quadros/' + id);
  }

  renomearQuadro(quadro: Quadro) {
    return this.httpClient.put<Quadro>(this.url + 'quadros/' + quadro.id, quadro);
  }
}
