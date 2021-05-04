import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { Role } from 'src/app/shared/enums/role.enum';
import { CargoFormComponent } from './components/cargo-form/cargo-form.component';
import { CargoListComponent } from './components/cargo-list/cargo-list.component';

const routes: Routes = [
  { path: '', component: CargoListComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'new', component: CargoFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'edit/:id', component: CargoFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargoRoutingModule { }
