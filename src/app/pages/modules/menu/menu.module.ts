import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuFormComponent } from './components/menu-form/menu-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MenuFormComponent,
    MenuListComponent
  ],
  imports: [
    SharedModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
