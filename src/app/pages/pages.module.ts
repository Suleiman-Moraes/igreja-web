import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
  NotFoundComponent,
  HomeComponent
],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
