import { Component, Injector, OnInit } from '@angular/core';
import { CargoService } from 'src/app/pages/pages-shared/services/cargo.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent extends BaseResourceListComponent {

  constructor(
    protected service: CargoService,
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
