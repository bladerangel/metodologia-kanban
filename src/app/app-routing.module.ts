import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadrosComponent } from './modulos/quadro/componentes/quadros/quadros.component';
import { QuadroDetalheComponent } from './modulos/quadro/componentes/quadro-detalhe/quadro-detalhe.component';

const routes: Routes = [
  { path: '', component: QuadrosComponent },
  { path: 'quadro-detalhe/:id', component: QuadroDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
