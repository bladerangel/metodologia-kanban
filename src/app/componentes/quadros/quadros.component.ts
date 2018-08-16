import { Component, OnInit } from '@angular/core';

import { QuadroService } from '../../servicos/quadro.service';
import { Quadro } from '../../modelos/quadro';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.css']
})
export class QuadrosComponent implements OnInit {

  constructor(private quadroService: QuadroService) { }

  quadros: Quadro[];

  ngOnInit() {
    this.quadroService.getQuadros()
      .subscribe(quadros => this.quadros = quadros);
  }

}
