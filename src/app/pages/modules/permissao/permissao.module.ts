import { NgModule } from '@angular/core';

import { PermissaoRoutingModule } from './permissao-routing.module';
import { PermissaoFormComponent } from './components/permissao-form/permissao-form.component';
import { PermissaoListComponent } from './components/permissao-list/permissao-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PermissaoFormComponent, 
    PermissaoListComponent
  ],
  imports: [
    SharedModule,
    PermissaoRoutingModule
  ]
})
export class PermissaoModule { }
