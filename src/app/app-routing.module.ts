import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadroDetalheComponent } from './componentes/quadro-detalhe/quadro-detalhe.component';
import { QuadrosComponent } from './componentes/quadros/quadros.component';

const routes: Routes = [
  {path: '', component: QuadrosComponent},
  {path: 'quadro-detalhe/:id', component: QuadroDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
