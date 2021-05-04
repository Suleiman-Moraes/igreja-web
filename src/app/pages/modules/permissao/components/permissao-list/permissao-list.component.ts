import { Component, Injector } from '@angular/core';
import { PermissaoService } from 'src/app/pages/pages-shared/services/permissao.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-permissao-list',
  templateUrl: './permissao-list.component.html',
  styleUrls: ['./permissao-list.component.css']
})
export class PermissaoListComponent extends BaseResourceListComponent {

  constructor(
    protected service: PermissaoService,
    protected injector: Injector
  ) {
    super(service, injector);
  }

  //PRIVATE METHODS
}
