import { Component, OnInit, Input } from '@angular/core';
import { Quadro } from '../../modelos/quadro';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.css']
})
export class QuadroComponent implements OnInit {

  constructor() { }

  @Input() quadro: Quadro;

  ngOnInit() {
  }

}
