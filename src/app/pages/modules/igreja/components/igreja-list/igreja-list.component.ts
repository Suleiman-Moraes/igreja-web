import { Component, Injector } from '@angular/core';
import { IgrejaService } from 'src/app/pages/pages-shared/services/igreja.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-igreja-list',
  templateUrl: './igreja-list.component.html',
  styleUrls: ['./igreja-list.component.css']
})
export class IgrejaListComponent extends BaseResourceListComponent {

  constructor(
    protected service: IgrejaService,
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
