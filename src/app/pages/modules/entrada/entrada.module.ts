import { NgModule } from '@angular/core';

import { EntradaRoutingModule } from './entrada-routing.module';
import { EntradaListComponent } from './components/entrada-list/entrada-list.component';
import { EntradaFormComponent } from './components/entrada-form/entrada-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EntradaListComponent, 
    EntradaFormComponent
  ],
  imports: [
    SharedModule,
    EntradaRoutingModule
  ]
})
export class EntradaModule { }
