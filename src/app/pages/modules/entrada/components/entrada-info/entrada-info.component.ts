import { Component, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EntradaService } from 'src/app/pages/pages-shared/services/entrada.service';
import { BaseResourceUtilComponent } from 'src/app/shared/components/base-resource-util/base-resource-util.component';

@Component({
  selector: 'app-entrada-info',
  templateUrl: './entrada-info.component.html',
  styleUrls: ['./entrada-info.component.css']
})
export class EntradaInfoComponent extends BaseResourceUtilComponent implements OnInit, OnDestroy {

  @Input() carregar: boolean = false;
  @Input() detalhe: boolean = true;
  informacao: any = null;
  subscription: Subscription;
  filter = {
    mesAno: new Date()
  };

  constructor(
    protected injector: Injector,
    private service: EntradaService
  ) {
    super(injector);
  }
  ngOnInit(): void {
    this.subscription = this.service.getData().subscribe(res => {
      if (res && res.carregarInformacoes) {
        this.filter = res.carregarInformacoes.filter;
        this.carregarInformacoes();
      }
    });
    if(this.carregar){
      this.carregarInformacoes();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //PRIVATE METHODS
  private carregarInformacoes(): void {
    this.buscar(this.service.getInformacao(this.filter), 'informacao');
  }
}
