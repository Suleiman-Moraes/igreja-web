import { Component, Injector, OnInit } from '@angular/core';
import { BaseResourceUtilComponent } from 'src/app/shared/components/base-resource-util/base-resource-util.component';
import { UsuarioService } from '../../pages-shared/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseResourceUtilComponent implements OnInit {

  user: any = {};

  constructor(
    protected injector: Injector,
    private usuarioService: UsuarioService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.user = this.usuarioService.getUsuario();
  }
}
