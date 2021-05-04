import { Component, Injector } from '@angular/core';
import { MenuService } from 'src/app/pages/pages-shared/services/menu.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent extends BaseResourceListComponent {

  constructor(
    protected service: MenuService,
    protected injector: Injector
  ) {
    super(service, injector);
  }

  //PRIVATE METHODS
}
