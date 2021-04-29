import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaRoutingModule } from './entrada-routing.module';
import { EntradaListComponent } from './components/entrada-list/entrada-list.component';
import { EntradaFormComponent } from './components/entrada-form/entrada-form.component';


@NgModule({
  declarations: [EntradaListComponent, EntradaFormComponent],
  imports: [
    CommonModule,
    EntradaRoutingModule
  ]
})
export class EntradaModule { }
