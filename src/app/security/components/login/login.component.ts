import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseResourceUtilComponent } from 'src/app/shared/components/base-resource-util/base-resource-util.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseResourceUtilComponent implements OnInit {

  private returnUrl: string;
  loginForm: FormGroup;

  usuario: string = '';
  senha: string = '';

  constructor(
    protected injector: Injector,
    private router: Router
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.buildResourceForm();
    this.authenticationService.logout();
  }

  login() {
    this.authenticationService.login(this.loginForm.value.login, this.loginForm.value.password)
      .then(() => {
        this.router.navigate(['/pages/home']);
      })
      .catch(erro => {
        this.tratarErro(erro);
      });
  }

  //PRIVATE METHODS
  private buildResourceForm(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required, Validators.maxLength(100)]],
      password: [null, [Validators.required, Validators.maxLength(30)]]
    });
  }
}
