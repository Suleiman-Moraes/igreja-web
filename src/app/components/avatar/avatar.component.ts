import { Component, Injector, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/pages/pages-shared/services/usuario.service';
import { BaseResourceUtilComponent } from 'src/app/shared/components/base-resource-util/base-resource-util.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent extends BaseResourceUtilComponent implements OnInit {

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
