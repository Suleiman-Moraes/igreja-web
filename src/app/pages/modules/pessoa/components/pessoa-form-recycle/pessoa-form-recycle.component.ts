import { Component, Injector, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CargoService } from 'src/app/pages/pages-shared/services/cargo.service';
import { EstadoService } from 'src/app/pages/pages-shared/services/estado.service';
import { IgrejaService } from 'src/app/pages/pages-shared/services/igreja.service';
import { PessoaService } from 'src/app/pages/pages-shared/services/pessoa.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-pessoa-form-recycle',
  templateUrl: './pessoa-form-recycle.component.html',
  styleUrls: ['./pessoa-form-recycle.component.css']
})
export class PessoaFormRecycleComponent extends BaseResourceFormComponent {

  @Input() id: number = null;
  @Input() me: boolean = false;

  enderecoForm: FormGroup;
  estadoEnderecoForm: FormGroup;
  estadoForm: FormGroup;
  igrejaForm: FormGroup;
  cargoForm: FormGroup;
  usuarioForm: FormGroup;

  estados: any[];
  igrejas: any[];
  cargos: any[];

  constructor(
    protected injector: Injector,
    protected service: PessoaService,
    private estadoService: EstadoService,
    private cargoService: CargoService,
    private igrejaService: IgrejaService
  ) {
    super(injector, service);
  }

  get possuiId(): boolean {
    return this.resource && this.resource.id && this.resource.id > 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['me'] || changes['id']) {
      if (this.me || (this.id && this.id > 0)) {
        this.currentAction = 'edit';
        this.loadResource();
      }
    }
  }

  submitForm(): void {
    this.blockUI.start();
    this.markAsTouched(this.formulario);
    this.beforeSubmitForm();
    this.resource = this.formulario.value;
    (this.me ? this.service.updateMe(this.resource) :
      this.service.enviarFormulario(this.resource, (this.resource.id != null && this.resource.id > 0))
    ).subscribe(
      responseApi => {
        this.blockUI.stop();
        this.tratarResponseSubimit(responseApi);
      }, err => {
        this.blockUI.stop();
        this.tratarErro(err);
      }
    );
  }

  //METHODS PRIVATE
  protected initForm(): void {
    this.estadoEnderecoForm = this.formId(true);
    this.estadoForm = this.formId();
    this.igrejaForm = this.formId();
    this.cargoForm = this.formId();
    this.usuarioForm = this.formBuilder.group({
      id: [null],
      login: [null, [Validators.maxLength(100), Validators.required]],
      senha: [null, [Validators.maxLength(30)]]
    });
    this.enderecoForm = this.formBuilder.group({
      id: [null],
      numero: [null, [Validators.maxLength(10)]],
      quadra: [null, [Validators.maxLength(20)]],
      lote: [null, [Validators.maxLength(20)]],
      complemento: [null, [Validators.maxLength(300)]],
      cep: [null, [Validators.maxLength(8), Validators.required]],
      rua: [null, [Validators.maxLength(100), Validators.required]],
      bairro: [null, [Validators.maxLength(100), Validators.required]],
      cidade: [null, [Validators.maxLength(100), Validators.required]],
      estado: this.estadoEnderecoForm
    });
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      telefone: [null, [Validators.maxLength(11)]],
      email: [null, [Validators.maxLength(100), Validators.email]],
      cpf: [null, [Validators.maxLength(11)]],
      cidade: [null, [Validators.maxLength(100)]],
      nascimento: [null],
      endereco: this.enderecoForm,
      estado: this.estadoForm,
      igreja: this.igrejaForm,
      cargo: this.cargoForm,
      usuario: this.usuarioForm
    });
  }

  protected posSubmitFormSucesso(): void {
    if (this.currentAction == 'new') {
      this.showSuccess('Pessoa incluída com sucesso!');
    }
    else {
      if (this.me) {
        this.showSuccess('Perfil atualizado com sucesso!');
      }
      else {
        this.showSuccess('Pessoa atualizada com sucesso!');
      }
    }
  }

  protected createPageTitle(): string {
    return 'Incluir Pessoa';
  }

  protected editionPageTitle(): string {
    return this.me ? 'Meu Perfil' : 'Editar Pessoa';
  }

  protected posNgOnInit(): void {
    this.buscar(this.estadoService.getAll(), 'estados');
    if (this.temPermissao(Role.ROLE_ADMIN)) {
      this.buscar(this.cargoService.getAll(), 'cargos');
    }
    if (this.temPermissao(Role.ROLE_ROOT)) {
      this.buscar(this.igrejaService.getAll(), 'igrejas');
    }
  }

  protected beforePatchValue(): void {
    if (this.resource.nascimento) {
      this.resource.nascimento = new Date(this.resource.nascimento);
    }
  }

  protected loadResource(): void {
    if (this.currentAction == 'edit') {
      this.realizarRequisicaoSimples(this.me ? this.service.findByIdMe() :
        this.service.getById(this.id), 'resource', () => {
          if (this.resource.id == null) {
            this.showError('Nenhum Registro encontrado.');
          }
          this.beforePatchValue();
          this.formulario.patchValue(this.resource);
          this.posLoadResource();
        }
      );
    }
  }

  protected setCurrentAction() {
    if (this.route.snapshot.url[0].path == "new") {
      this.currentAction = "new";
    }
    else {
      this.currentAction = "edit";
      if(this.route.snapshot.params.id){
        this.id = this.route.snapshot.params.id;
      }
    }
  }
}
