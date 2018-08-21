import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreRoutingModule } from './sobre-routing.module';

import { SobreComponent } from './componentes/sobre/sobre.component';

@NgModule({
  imports: [
    CommonModule,
    SobreRoutingModule
  ],
  declarations: [SobreComponent]
})
export class SobreModule { }
