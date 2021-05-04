import { Component, Injector, OnInit } from '@angular/core';
import { ItemMenuService } from 'src/app/pages/pages-shared/services/item-menu.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-item-menu-list',
  templateUrl: './item-menu-list.component.html',
  styleUrls: ['./item-menu-list.component.css']
})
export class ItemMenuListComponent extends BaseResourceListComponent {

  igrejas: any[];

  constructor(
    protected service: ItemMenuService,
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
