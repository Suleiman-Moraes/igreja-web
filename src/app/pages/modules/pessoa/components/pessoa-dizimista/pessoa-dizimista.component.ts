import { Component, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { EntradaService } from 'src/app/pages/pages-shared/services/entrada.service';
import { IgrejaService } from 'src/app/pages/pages-shared/services/igreja.service';
import { PessoaService } from 'src/app/pages/pages-shared/services/pessoa.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-pessoa-dizimista',
  templateUrl: './pessoa-dizimista.component.html',
  styleUrls: ['./pessoa-dizimista.component.css']
})
export class PessoaDizimistaComponent extends BaseResourceListComponent {

  formulario: FormGroup;
  igrejas: any[];
  cargos: any[];
  displayBasic: boolean = false;
  selecionado: any = {};

  filtroDizimistaEnum = {
    DEVOLVEU: 'Já devolveram',
    NAO_DEVOLVEU: 'Ainda não devolveram',
    TODOS: 'Todos'
  };

  constructor(
    protected service: PessoaService,
    protected injector: Injector,
    private igrejaService: IgrejaService,
    private entradaService: EntradaService
  ) {
    super(service, injector);
  }

  get filtroDizimistaEnumOptions(): Array<any> {
    if (!this['filtroDizimistaEnumOptionsVar']) {
      this['filtroDizimistaEnumOptionsVar'] = this.getTypes(this.filtroDizimistaEnum);
    }
    return this['filtroDizimistaEnumOptionsVar'];
  }

  buildForm(): void {
    this.size = 100;
    this.formulario = this.formBuilder.group({
      pessoaId: [null],
      valor: [null, [Validators.required, Validators.minLength(1), Validators.min(0)]]
    });
    this.filterForm = this.formBuilder.group({
      page: [this.page],
      size: [this.size],
      id: [null],
      filtroDizimistaEnum: ['NAO_DEVOLVEU'],
      igrejaId: [null],
      cargoId: [null],
      nome: [null],
      login: [null],
      cpf: [null],
      ativo: [null],
    });
  }

  showBasicDialog(obj): void {
    this.selecionado = obj;
    this.displayBasic = true;
    this.formulario.get('pessoaId').setValue(obj.id);
    this.formulario.get('valor').setValue(null);
  }

  salvar(): void {
    this.blockUI.start();
    this.markAsTouched(this.formulario);
    this.entradaService.inserirDizimo(this.formulario.value.pessoaId, this.formulario.value.valor).subscribe(
      responseApi => {
        this.blockUI.stop();
        if (responseApi != null) {
          this.findByPararamsFilter();
          this.showSuccess('Dízimo lançado com Sucesso!');
          this.displayBasic = false;
        }
      }, err => {
        this.blockUI.stop();
        this.tratarErro(err);
      }
    );
  }

  //PRIVATE METHODS
  protected findByPararamsFilter(): void {
    this.blockUI.start();
    if (this.filterForm) {
      this.service.findByFilterDizimista(this.filterForm.value).subscribe(
        responseApi => {
          this.blockUI.stop();
          this.tratarResponseApi(responseApi);
        }, err => {
          this.blockUI.stop();
          this.tratarErro(err);
        }
      );
    }
  }

  protected posNgOnInit(): void {
    if (this.temPermissao(Role.ROLE_ROOT)) {
      this.buscar(this.igrejaService.getAll(), 'igrejas');
    }
  }
}
