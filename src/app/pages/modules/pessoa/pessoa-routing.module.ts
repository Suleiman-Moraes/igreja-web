import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaPerfilComponent } from './components/pessoa-perfil/pessoa-perfil.component';

const routes: Routes = [
  { path: 'perfil', component: PessoaPerfilComponent, canActivate: [AuthGuard] },
  { path: '', component: PessoaListComponent, canActivate: [AuthGuard] },
  { path: 'new', component: PessoaFormComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: PessoaFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
