import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { Role } from 'src/app/shared/enums/role.enum';
import { ItemMenuFormComponent } from './components/item-menu-form/item-menu-form.component';
import { ItemMenuListComponent } from './components/item-menu-list/item-menu-list.component';

const routes: Routes = [
  { path: '', component: ItemMenuListComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'new', component: ItemMenuFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } },
  { path: 'edit/:id', component: ItemMenuFormComponent, canActivate: [AuthGuard], data: { roles: [Role.ROLE_ROOT] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemMenuRoutingModule { }
