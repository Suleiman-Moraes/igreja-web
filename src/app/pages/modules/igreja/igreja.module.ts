import { NgModule } from '@angular/core';

import { IgrejaRoutingModule } from './igreja-routing.module';
import { IgrejaFormComponent } from './components/igreja-form/igreja-form.component';
import { IgrejaListComponent } from './components/igreja-list/igreja-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IgrejaFormComponent, 
    IgrejaListComponent
  ],
  imports: [
    SharedModule,
    IgrejaRoutingModule
  ]
})
export class IgrejaModule { }
