import { NgModule } from '@angular/core';

import { FormaPagamentoRoutingModule } from './forma-pagamento-routing.module';
import { FormaPagamentoFormComponent } from './components/forma-pagamento-form/forma-pagamento-form.component';
import { FormaPagamentoListComponent } from './components/forma-pagamento-list/forma-pagamento-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormaPagamentoFormComponent, 
    FormaPagamentoListComponent
  ],
  imports: [
    SharedModule,
    FormaPagamentoRoutingModule
  ]
})
export class FormaPagamentoModule { }
