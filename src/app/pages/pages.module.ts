import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GraficoModule } from './modules/grafico/grafico.module';

@NgModule({
  declarations: [
  NotFoundComponent,
  HomeComponent
],
  imports: [
    SharedModule,
    PagesRoutingModule,
    GraficoModule
  ]
})
export class PagesModule { }
