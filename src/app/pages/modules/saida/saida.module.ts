import { NgModule } from '@angular/core';

import { SaidaRoutingModule } from './saida-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaidaListComponent } from './components/saida-list/saida-list.component';
import { SaidaFormComponent } from './components/saida-form/saida-form.component';


@NgModule({
  declarations: [
  SaidaListComponent,
  SaidaFormComponent
],
  imports: [
    SharedModule,
    SaidaRoutingModule
  ]
})
export class SaidaModule { }
