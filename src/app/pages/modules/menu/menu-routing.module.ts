import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { Role } from 'src/app/shared/enums/role.enum';
import { MenuFormComponent } from './components/menu-form/menu-form.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';

const routes: Routes = [
  { path: '', component: MenuListComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'new', component: MenuFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'edit/:id', component: MenuFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
