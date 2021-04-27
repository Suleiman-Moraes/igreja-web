import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaPerfilComponent } from './components/pessoa-perfil/pessoa-perfil.component';
import { PessoaFormRecycleComponent } from './components/pessoa-form-recycle/pessoa-form-recycle.component';


@NgModule({
  declarations: [PessoaListComponent, PessoaFormComponent, PessoaPerfilComponent, PessoaFormRecycleComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
