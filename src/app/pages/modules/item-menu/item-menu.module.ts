import { NgModule } from '@angular/core';

import { ItemMenuRoutingModule } from './item-menu-routing.module';
import { ItemMenuFormComponent } from './components/item-menu-form/item-menu-form.component';
import { ItemMenuListComponent } from './components/item-menu-list/item-menu-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PickListModule } from 'primeng-lts/picklist';


@NgModule({
  declarations: [
    ItemMenuFormComponent, 
    ItemMenuListComponent
  ],
  imports: [
    SharedModule,
    ItemMenuRoutingModule,
    PickListModule
  ]
})
export class ItemMenuModule { }
