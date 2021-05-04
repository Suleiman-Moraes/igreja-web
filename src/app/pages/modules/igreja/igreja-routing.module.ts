import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { Role } from 'src/app/shared/enums/role.enum';
import { IgrejaFormComponent } from './components/igreja-form/igreja-form.component';
import { IgrejaListComponent } from './components/igreja-list/igreja-list.component';

const routes: Routes = [
  { path: '', component: IgrejaListComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'new', component: IgrejaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'edit/:id', component: IgrejaFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IgrejaRoutingModule { }
