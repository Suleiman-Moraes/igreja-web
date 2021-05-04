import { Component, Injector } from '@angular/core';
import { FormaPagamentoService } from 'src/app/pages/pages-shared/services/forma-pagamento.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-forma-pagamento-list',
  templateUrl: './forma-pagamento-list.component.html',
  styleUrls: ['./forma-pagamento-list.component.css']
})
export class FormaPagamentoListComponent extends BaseResourceListComponent {

  constructor(
    protected service: FormaPagamentoService,
    protected injector: Injector
  ) {
    super(service, injector);
  }

  ativarOuInativar(id, acao: boolean): void {
    const t: string = acao ? 'ativar' : 'inativar';
    this.openConfirmDialog(`Confirma ${t} esse registro?`, () => {
      this.tratarUpdateRegistro(acao ? this.service.ativar(id) : this.service.delete(id));
    }, () => { });
  }

  //PRIVATE METHODS
}
