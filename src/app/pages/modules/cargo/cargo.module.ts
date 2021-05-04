import { NgModule } from '@angular/core';

import { CargoRoutingModule } from './cargo-routing.module';
import { CargoListComponent } from './components/cargo-list/cargo-list.component';
import { CargoFormComponent } from './components/cargo-form/cargo-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PickListModule } from 'primeng-lts/picklist';


@NgModule({
  declarations: [
    CargoListComponent, 
    CargoFormComponent
  ],
  imports: [
    SharedModule,
    CargoRoutingModule,
    PickListModule
  ]
})
export class CargoModule { }
