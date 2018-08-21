import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadrosComponent } from './componentes/quadros/quadros.component';
import { QuadroDetalheComponent } from './componentes/quadro-detalhe/quadro-detalhe.component';

const routes: Routes = [
  { path: '', component: QuadrosComponent },
  { path: 'quadro-detalhe/:id', component: QuadroDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuadroRoutingModule { }
