import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaPerfilComponent } from './components/pessoa-perfil/pessoa-perfil.component';
import { PessoaFormRecycleComponent } from './components/pessoa-form-recycle/pessoa-form-recycle.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnderecoModule } from '../endereco/endereco.module';
import { PessoaDizimistaComponent } from './components/pessoa-dizimista/pessoa-dizimista.component';
import { DialogModule } from 'primeng-lts/dialog';


@NgModule({
  declarations: [
    PessoaListComponent, 
    PessoaFormComponent, 
    PessoaPerfilComponent, 
    PessoaFormRecycleComponent, 
    PessoaDizimistaComponent
  ],
  imports: [
    SharedModule,
    PessoaRoutingModule,
    EnderecoModule,
    DialogModule
  ]
})
export class PessoaModule { }
