import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { Role } from 'src/app/shared/enums/role.enum';
import { EntradaFormComponent } from './components/entrada-form/entrada-form.component';
import { EntradaListComponent } from './components/entrada-list/entrada-list.component';

const routes: Routes = [
  { path: '', component: EntradaListComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_TESOUREIRO] } },
  { path: 'new', component: EntradaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_TESOUREIRO] } },
  { path: 'edit/:id', component: EntradaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_TESOUREIRO] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradaRoutingModule { }
