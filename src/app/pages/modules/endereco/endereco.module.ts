import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { EnderecoRecycleComponent } from './components/endereco-recycle/endereco-recycle.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EnderecoRecycleComponent
  ],
  imports: [
    SharedModule,
    EnderecoRoutingModule
  ],
  exports: [
    EnderecoRecycleComponent
  ]
})
export class EnderecoModule { }
