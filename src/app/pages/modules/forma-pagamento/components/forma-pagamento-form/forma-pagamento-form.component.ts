import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormaPagamentoService } from 'src/app/pages/pages-shared/services/forma-pagamento.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-forma-pagamento-form',
  templateUrl: './forma-pagamento-form.component.html',
  styleUrls: ['./forma-pagamento-form.component.css']
})
export class FormaPagamentoFormComponent extends BaseResourceFormComponent {

  constructor(
    protected injector: Injector,
    protected service: FormaPagamentoService
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
      this.showSuccess('Forma de Pagamento incluída com sucesso!');
    }
    else {
      this.showSuccess('Forma de Pagamento atualizada com sucesso!');
    }
    this.location.back();
  }

  protected createPageTitle(): string {
    return 'Incluir Forma de Pagamento';
  }

  protected editionPageTitle(): string {
    return 'Editar Forma de Pagamento';
  }
}
