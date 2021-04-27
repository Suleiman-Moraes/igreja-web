import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaPerfilComponent } from './components/pessoa-perfil/pessoa-perfil.component';
import { PessoaFormRecycleComponent } from './components/pessoa-form-recycle/pessoa-form-recycle.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnderecoModule } from '../endereco/endereco.module';


@NgModule({
  declarations: [
    PessoaListComponent, 
    PessoaFormComponent, 
    PessoaPerfilComponent, 
    PessoaFormRecycleComponent
  ],
  imports: [
    SharedModule,
    PessoaRoutingModule,
    EnderecoModule
  ]
})
export class PessoaModule { }
