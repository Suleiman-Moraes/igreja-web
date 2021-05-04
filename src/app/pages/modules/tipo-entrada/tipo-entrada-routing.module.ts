import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { Role } from 'src/app/shared/enums/role.enum';
import { TipoEntradaFormComponent } from './components/tipo-entrada-form/tipo-entrada-form.component';
import { TipoEntradaListComponent } from './components/tipo-entrada-list/tipo-entrada-list.component';

const routes: Routes = [
  { path: '', component: TipoEntradaListComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'new', component: TipoEntradaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'edit/:id', component: TipoEntradaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoEntradaRoutingModule { }
