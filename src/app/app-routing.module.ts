import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
usando roteamento lazy loading
*/
const routes: Routes = [
  {
    path: '',
    loadChildren: './modulos/quadro/quadro.module#QuadroModule'
  },
  {
    path: 'sobre',
    loadChildren: './modulos/sobre/sobre.module#SobreModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
