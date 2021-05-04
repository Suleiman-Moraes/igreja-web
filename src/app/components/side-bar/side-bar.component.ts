import { Component, Injector, OnInit } from '@angular/core';
import { MenuService } from 'src/app/pages/pages-shared/services/menu.service';
import { BaseResourceUtilComponent } from 'src/app/shared/components/base-resource-util/base-resource-util.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent extends BaseResourceUtilComponent implements OnInit {

  menus: any[] = [];

  constructor(
    protected injector: Injector,
    private menuService: MenuService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.buscar(this.menuService.getAll(), 'menus');
  }
}
