import { NgModule } from '@angular/core';

import { TipoEntradaRoutingModule } from './tipo-entrada-routing.module';
import { TipoEntradaFormComponent } from './components/tipo-entrada-form/tipo-entrada-form.component';
import { TipoEntradaListComponent } from './components/tipo-entrada-list/tipo-entrada-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TipoEntradaFormComponent, 
    TipoEntradaListComponent
  ],
  imports: [
    SharedModule,
    TipoEntradaRoutingModule
  ]
})
export class TipoEntradaModule { }
