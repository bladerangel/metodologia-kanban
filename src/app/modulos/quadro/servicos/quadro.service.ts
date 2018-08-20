import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Quadro } from '../modelos/quadro';

@Injectable({
  providedIn: 'root'
})
export class QuadroService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = 'http://localhost:3000/quadros/';

  getQuadros(): Observable<Quadro[]> {
    return this.httpClient.get<Quadro[]>(this.url);
  }

  salvarQuadro(quadro: Quadro): Observable<Quadro> {
    return this.httpClient.post<Quadro>(this.url, quadro);
  }

  renomearQuadro(quadro: Quadro): Observable<Quadro> {
    return this.httpClient.put<Quadro>(this.url + quadro.id, quadro);
  }

  removerQuadro(quadroId: number): Observable<any> {
    return this.httpClient.delete(this.url + quadroId);
  }

}
