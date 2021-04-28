import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { Role } from 'src/app/shared/enums/role.enum';
import { SaidaFormComponent } from './components/saida-form/saida-form.component';
import { SaidaListComponent } from './components/saida-list/saida-list.component';

const routes: Routes = [
  { path: '', component: SaidaListComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_TESOUREIRO] } },
  { path: 'new', component: SaidaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_TESOUREIRO] } },
  { path: 'edit/:id', component: SaidaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_TESOUREIRO] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaidaRoutingModule { }
