import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseResourceUtilComponent } from 'src/app/shared/components/base-resource-util/base-resource-util.component';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseResourceUtilComponent implements OnInit {

  private returnUrl: string;

  usuario: string = 'root';
  senha: string = '123456';

  constructor(
    protected injector: Injector,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.authenticationService.logout();
  }

  logar(): void {
    this.returnUrl = 'pages';
    sessionStorage.setItem('tRcr7Ssn', btoa(JSON.stringify({ teste: 'teste' })));
    this.router.navigate([this.returnUrl]);
  }

  login(usuario: string, senha: string) {
    this.authenticationService.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/pages/home']);
      })
      .catch(erro => {
        this.tratarErro(erro);
      });
  }
}
