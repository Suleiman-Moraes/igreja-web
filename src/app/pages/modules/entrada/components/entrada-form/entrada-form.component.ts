import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { EntradaService } from 'src/app/pages/pages-shared/services/entrada.service';
import { FormaPagamentoService } from 'src/app/pages/pages-shared/services/forma-pagamento.service';
import { IgrejaService } from 'src/app/pages/pages-shared/services/igreja.service';
import { PessoaService } from 'src/app/pages/pages-shared/services/pessoa.service';
import { TipoEntradaService } from 'src/app/pages/pages-shared/services/tipo-entrada.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-entrada-form',
  templateUrl: './entrada-form.component.html',
  styleUrls: ['./entrada-form.component.css']
})
export class EntradaFormComponent extends BaseResourceFormComponent {

  igrejaForm: FormGroup;
  formaPagamentoForm: FormGroup;
  tipoEntradaForm: FormGroup;
  pessoaForm: FormGroup;

  igrejas: any[];
  formaPagamentos: any[];
  tipoEntradas: any[];
  pessoas: any[];
  novaPessoa: boolean = false;

  constructor(
    protected injector: Injector,
    protected service: EntradaService,
    private igrejaService: IgrejaService,
    private tipoEntradaService: TipoEntradaService,
    private pessoaService: PessoaService,
    private formaPagamentoService: FormaPagamentoService
  ) {
    super(injector, service);
  }

  //METHODS PRIVATE
  protected initForm(): void {
    this.igrejaForm = this.formId();
    this.pessoaForm = this.formBuilder.group({
      id: [null],
      nome: [null]
    });
    this.formaPagamentoForm = this.formId();
    this.tipoEntradaForm = this.formId(true);
    this.formulario = this.formBuilder.group({
      id: [null],
      dataCadastro: [null],
      dataAlteracao: [null],
      idUsuarioCadastro: [null],
      idUsuarioAlteracao: [null],
      dataEntrada: [new Date(), [Validators.required]],
      valor: [null, [Validators.required, Validators.min(0)]],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      ativo: [null],
      descricao: [null, [Validators.maxLength(300)]],
      tipoEntrada: this.tipoEntradaForm,
      formaPagamento: this.formaPagamentoForm,
      pessoa: this.pessoaForm,
      igreja: this.igrejaForm
    });
  }

  protected posSubmitFormSucesso(): void {
    if (this.currentAction == 'new') {
      this.showSuccess('Entrada incluída com sucesso!');
      this.openConfirmDialog(`Lançar nova entrada?`, () => {
        this.initForm();
        this.resource = null;
        this.novaPessoa = false;
      }, () => this.back());
    }
    else {
      this.showSuccess('Entrada atualizada com sucesso!');
      this.back();
    }
  }

  protected createPageTitle(): string {
    return 'Incluir Entrada';
  }

  protected editionPageTitle(): string {
    return 'Editar Entrada';
  }

  protected beforePatchValue() {
    if (this.resource.dataEntrada) {
      this.resource.dataEntrada = new Date(this.resource.dataEntrada);
    }
  }

  protected posNgOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.pessoaId) {
        this.pessoaForm.get('id').setValue(this.convertToNumber(params.pessoaId));
      }
    });
    this.buscar(this.pessoaService.findByIgrejaIdAndAtivo(this.igrejaForm.value.id), 'pessoas');
    this.buscar(this.formaPagamentoService.getAll(), 'formaPagamentos');
    this.buscar(this.tipoEntradaService.getAll(), 'tipoEntradas');
    if (this.temPermissao(Role.ROLE_ROOT)) {
      this.buscar(this.igrejaService.getAll(), 'igrejas');
    }
  }
}
