import { Component, Injector, OnInit, SimpleChanges } from '@angular/core';
import { CargoService } from 'src/app/pages/pages-shared/services/cargo.service';
import { IgrejaService } from 'src/app/pages/pages-shared/services/igreja.service';
import { PessoaService } from 'src/app/pages/pages-shared/services/pessoa.service';
import { UsuarioService } from 'src/app/pages/pages-shared/services/usuario.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent extends BaseResourceListComponent {

  igrejas: any[];
  cargos: any[];

  constructor(
    protected service: PessoaService,
    protected injector: Injector,
    private usuarioService: UsuarioService,
    private igrejaService: IgrejaService,
    private cargoService: CargoService
  ) {
    super(service, injector);
  }

  buildForm(): void {
    this.filterForm = this.formBuilder.group({
      page: [this.page],
      size: [this.size],
      id: [null],
      igrejaId: [null],
      cargoId: [null],
      nome: [null],
      login: [null],
      cpf: [null],
      ativo: [null],
    });
  }

  resetarSenha(rowData): void {
    this.openConfirmDialog(`Confirma resetar a senha do(a) "${rowData.nome}"?`, () => {
      this.tratarUpdateRegistro(this.usuarioService.reset(rowData.id));
    }, () => { });
  }

  ativarOuInativar(id, acao: boolean): void {
    const t: string = acao ? 'ativar' : 'inativar';
    this.openConfirmDialog(`Confirma ${t} esse registro?`, () => {
      this.tratarUpdateRegistro(acao ? this.service.ativar(id) : this.service.delete(id));
    }, () => { });
  }

  //PRIVATE METHODS
  protected findByPararamsFilter(): void {
    this.blockUI.start();
    if (this.filterForm) {
      this.service.findByParams(this.filterForm.value).subscribe(
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
    this.buscar(this.cargoService.getAll(), 'cargos');
    if (this.temPermissao(Role.ROLE_ROOT)) {
      this.buscar(this.igrejaService.getAll(), 'igrejas');
    }
  }
}
