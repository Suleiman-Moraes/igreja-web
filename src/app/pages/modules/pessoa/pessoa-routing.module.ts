import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { Role } from 'src/app/shared/enums/role.enum';
import { PessoaDizimistaComponent } from './components/pessoa-dizimista/pessoa-dizimista.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaPerfilComponent } from './components/pessoa-perfil/pessoa-perfil.component';

const routes: Routes = [
  { path: 'perfil', component: PessoaPerfilComponent, canActivate: [AuthGuard] },
  { path: 'dizimista', component: PessoaDizimistaComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_TESOUREIRO] } },
  { path: '', component: PessoaListComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_PESSOA] } },
  { path: 'new', component: PessoaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_PESSOA] } },
  { path: 'edit/:id', component: PessoaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_PESSOA] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
