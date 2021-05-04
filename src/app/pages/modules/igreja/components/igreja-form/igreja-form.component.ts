import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { IgrejaService } from 'src/app/pages/pages-shared/services/igreja.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-igreja-form',
  templateUrl: './igreja-form.component.html',
  styleUrls: ['./igreja-form.component.css']
})
export class IgrejaFormComponent extends BaseResourceFormComponent {

  constructor(
    protected injector: Injector,
    protected service: IgrejaService
  ) {
    super(injector, service);
  }

  //METHODS PRIVATE
  protected initForm(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      ativo: [null]
    });
  }

  protected posSubmitFormSucesso(): void {
    if (this.currentAction == 'new') {
      this.showSuccess('Igreja incluída com sucesso!');
    }
    else {
      this.showSuccess('Igreja atualizada com sucesso!');
    }
    this.location.back();
  }

  protected createPageTitle(): string {
    return 'Incluir Igreja';
  }

  protected editionPageTitle(): string {
    return 'Editar Igreja';
  }
}
