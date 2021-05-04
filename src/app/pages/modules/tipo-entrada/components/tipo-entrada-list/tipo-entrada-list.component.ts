import { Component, Injector } from '@angular/core';
import { TipoEntradaService } from 'src/app/pages/pages-shared/services/tipo-entrada.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-tipo-entrada-list',
  templateUrl: './tipo-entrada-list.component.html',
  styleUrls: ['./tipo-entrada-list.component.css']
})
export class TipoEntradaListComponent extends BaseResourceListComponent {

  constructor(
    protected service: TipoEntradaService,
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
