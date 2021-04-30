import { NgModule } from '@angular/core';

import { EntradaRoutingModule } from './entrada-routing.module';
import { EntradaListComponent } from './components/entrada-list/entrada-list.component';
import { EntradaFormComponent } from './components/entrada-form/entrada-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntradaInfoComponent } from './components/entrada-info/entrada-info.component';


@NgModule({
  declarations: [
    EntradaListComponent, 
    EntradaFormComponent, 
    EntradaInfoComponent
  ],
  imports: [
    SharedModule,
    EntradaRoutingModule
  ],
  exports: [
    EntradaInfoComponent
  ]
})
export class EntradaModule { }
