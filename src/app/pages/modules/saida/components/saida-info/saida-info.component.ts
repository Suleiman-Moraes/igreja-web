import { Component, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaidaService } from 'src/app/pages/pages-shared/services/saida.service';
import { BaseResourceUtilComponent } from 'src/app/shared/components/base-resource-util/base-resource-util.component';

@Component({
  selector: 'app-saida-info',
  templateUrl: './saida-info.component.html',
  styleUrls: ['./saida-info.component.css']
})
export class SaidaInfoComponent extends BaseResourceUtilComponent implements OnInit, OnDestroy {

  @Input() carregar: boolean = false;
  informacao: any = null;
  subscription: Subscription;
  filter = {
    mesAno: new Date()
  };

  constructor(
    protected injector: Injector,
    private service: SaidaService
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
    if (this.carregar) {
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
