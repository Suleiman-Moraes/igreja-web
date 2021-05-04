import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { PermissaoService } from 'src/app/pages/pages-shared/services/permissao.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-permissao-form',
  templateUrl: './permissao-form.component.html',
  styleUrls: ['./permissao-form.component.css']
})
export class PermissaoFormComponent extends BaseResourceFormComponent {

  constructor(
    protected injector: Injector,
    protected service: PermissaoService
  ) {
    super(injector, service);
  }

  //METHODS PRIVATE
  protected initForm(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      descricao: [null, [Validators.maxLength(300)]]
    });
  }

  protected posSubmitFormSucesso(): void {
    if (this.currentAction == 'new') {
      this.showSuccess('Permissão incluída com sucesso!');
    }
    else {
      this.showSuccess('Permissão atualizada com sucesso!');
    }
    this.location.back();
  }

  protected createPageTitle(): string {
    return 'Incluir Permissão';
  }

  protected editionPageTitle(): string {
    return 'Editar Permissão';
  }
}
