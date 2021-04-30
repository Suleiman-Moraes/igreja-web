import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EntradaService } from 'src/app/pages/pages-shared/services/entrada.service';
import { GraficoService } from 'src/app/pages/pages-shared/services/grafico.service';
import { SaidaService } from 'src/app/pages/pages-shared/services/saida.service';
import { BaseResourceUtilComponent } from 'src/app/shared/components/base-resource-util/base-resource-util.component';

@Component({
  selector: 'app-grafico-anual',
  templateUrl: './grafico-anual.component.html',
  styleUrls: ['./grafico-anual.component.css']
})
export class GraficoAnualComponent extends BaseResourceUtilComponent implements OnInit {

  formulario: FormGroup;
  dataBarra = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: []
  };
  datasets: any[];

  ano = 2021;
  mes = -1;

  constructor(
    protected injector: Injector,
    private service: GraficoService,
    private saidaService: SaidaService,
    private entradaService: EntradaService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.initForm();
    this.carregarBarras();
  }

  carregarBarras(): void {
    this.datasets = null;
    this.buscar(this.service.montarGraficoAnual(this.formulario.value.ano), 'datasets', () => {
      this.dataBarra.datasets = this.datasets;
    });
  }

  selectData(event) {
    if (this.ano != this.formulario.value.ano || event.element._index != this.mes) {
      let data = new Date();
      data.setUTCFullYear(this.formulario.value.ano, event.element._index, 2);
      this.ano = this.formulario.value.ano;
      this.mes = event.element._index;
      this.entradaService.sendData({ carregarInformacoes: { filter: { mesAno: data } } });
      this.saidaService.sendData({ carregarInformacoes: { filter: { mesAno: data } } });
    }
  }

  private initForm(): void {
    this.formulario = this.formBuilder.group({
      ano: [this.ano]
    });
  }
}
