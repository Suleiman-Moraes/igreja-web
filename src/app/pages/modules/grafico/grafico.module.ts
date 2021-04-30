import { NgModule } from '@angular/core';

import { GraficoRoutingModule } from './grafico-routing.module';
import { GraficoAnualComponent } from './components/grafico-anual/grafico-anual.component';
import { GraficoMensalComponent } from './components/grafico-mensal/grafico-mensal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'primeng-lts/chart';
import { EntradaModule } from '../entrada/entrada.module';
import { SaidaModule } from '../saida/saida.module';

@NgModule({
  declarations: [
    GraficoAnualComponent, 
    GraficoMensalComponent
  ],
  imports: [
    SharedModule,
    GraficoRoutingModule,
    ChartModule,
    EntradaModule,
    SaidaModule
  ],
  exports: [
    GraficoAnualComponent, 
    GraficoMensalComponent
  ]
})
export class GraficoModule { }
