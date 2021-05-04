import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { TipoEntradaService } from 'src/app/pages/pages-shared/services/tipo-entrada.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-tipo-entrada-form',
  templateUrl: './tipo-entrada-form.component.html',
  styleUrls: ['./tipo-entrada-form.component.css']
})
export class TipoEntradaFormComponent extends BaseResourceFormComponent {

  constructor(
    protected injector: Injector,
    protected service: TipoEntradaService
  ) {
    super(injector, service);
  }

  //METHODS PRIVATE
  protected initForm(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      dataCadastro: [null],
      dataAlteracao: [null],
      idUsuarioCadastro: [null],
      idUsuarioAlteracao: [null],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      ativo: [null],
      descricao: [null, [Validators.maxLength(300)]]
    });
  }

  protected posSubmitFormSucesso(): void {
    if (this.currentAction == 'new') {
      this.showSuccess('Tipo de Entrada incluída com sucesso!');
    }
    else {
      this.showSuccess('Tipo de Entrada atualizada com sucesso!');
    }
    this.location.back();
  }

  protected createPageTitle(): string {
    return 'Incluir Tipo de Entrada';
  }

  protected editionPageTitle(): string {
    return 'Editar Tipo de Entrada';
  }
}
