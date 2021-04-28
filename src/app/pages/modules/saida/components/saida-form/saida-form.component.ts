import { Component, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormaPagamentoService } from 'src/app/pages/pages-shared/services/forma-pagamento.service';
import { IgrejaService } from 'src/app/pages/pages-shared/services/igreja.service';
import { SaidaService } from 'src/app/pages/pages-shared/services/saida.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-saida-form',
  templateUrl: './saida-form.component.html',
  styleUrls: ['./saida-form.component.css']
})
export class SaidaFormComponent extends BaseResourceFormComponent {

  igrejaForm: FormGroup;
  formaPagamentoForm: FormGroup;

  igrejas: any[];
  formaPagamentos: any[];

  constructor(
    protected injector: Injector,
    protected service: SaidaService,
    private igrejaService: IgrejaService,
    private formaPagamentoService: FormaPagamentoService
  ) {
    super(injector, service);
  }

  //METHODS PRIVATE
  protected initForm(): void {
    this.igrejaForm = this.formId();
    this.formaPagamentoForm = this.formId();
    this.formulario = this.formBuilder.group({
      id: [null],
      dataCadastro: [null],
      dataAlteracao: [null],
      idUsuarioCadastro: [null],
      idUsuarioAlteracao: [null],
      dataSaida: [new Date(), [Validators.required]],
      valor: [null, [Validators.required, Validators.min(0)]],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      ativo: [null],
      descricao: [null, [Validators.maxLength(300)]],
      saidaProgramada: [null],
      formaPagamento: this.formaPagamentoForm,
      igreja: this.igrejaForm
    });
  }

  protected posSubmitFormSucesso(): void {
    if (this.currentAction == 'new') {
      this.showSuccess('Saída incluída com sucesso!');
    }
    else {
      this.showSuccess('Saída atualizada com sucesso!');
    }
    this.location.back();
  }

  protected createPageTitle(): string {
    return 'Incluir Saída';
  }

  protected editionPageTitle(): string {
    return 'Editar Saída';
  }

  protected beforePatchValue(){
    if(this.resource.dataSaida){
      this.resource.dataSaida = new Date(this.resource.dataSaida);
    }
  }

  protected posNgOnInit(): void {
    this.buscar(this.formaPagamentoService.getAll(), 'formaPagamentos');
    if (this.temPermissao(Role.ROLE_ROOT)) {
      this.buscar(this.igrejaService.getAll(), 'igrejas');
    }
  }
}
