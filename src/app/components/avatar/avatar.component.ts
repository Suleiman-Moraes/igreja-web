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
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
    }
    else {
      this.buscar(this.usuarioService.findUsuarioLogadoDtoBy(), 'user', () => {
        sessionStorage.setItem('user', JSON.stringify(this.user));
      });
    }
  }

}
