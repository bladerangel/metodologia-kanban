import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
