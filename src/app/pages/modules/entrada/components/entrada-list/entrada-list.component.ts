import { Component, Injector, OnInit } from '@angular/core';
import { EntradaService } from 'src/app/pages/pages-shared/services/entrada.service';
import { IgrejaService } from 'src/app/pages/pages-shared/services/igreja.service';
import { TipoEntradaService } from 'src/app/pages/pages-shared/services/tipo-entrada.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-entrada-list',
  templateUrl: './entrada-list.component.html',
  styleUrls: ['./entrada-list.component.css']
})
export class EntradaListComponent extends BaseResourceListComponent {

  igrejas: any[];
  tipoEntradas: any[];

  informacao: any = null;

  constructor(
    protected service: EntradaService,
    protected injector: Injector,
    private igrejaService: IgrejaService,
    private tipoEntradaService: TipoEntradaService
  ) {
    super(service, injector);
  }

  buildForm(): void {
    this.filterForm = this.formBuilder.group({
      page: [this.page],
      size: [this.size],
      id: [null],
      igrejaId: [null],
      tipoEntradaId: [null],
      nomePessoa: [null],
      mesAno: [new Date()],
      ativo: [null]
    });
  }

  ativarOuInativar(id, acao: boolean): void {
    const t: string = acao ? 'ativar' : 'inativar';
    this.openConfirmDialog(`Confirma ${t} esse registro?`, () => {
      this.tratarUpdateRegistro(acao ? this.service.ativar(id) : this.service.delete(id));
    }, () => { });
  }

  //PRIVATE METHODS
  protected findByPararamsFilter(): void {
    if (this.filterForm) {
      this.blockUI.start();
      this.service.findByParams(this.filterForm.value).subscribe(
        responseApi => {
          this.tratarResponseApi(responseApi);
          this.buscar(this.service.getInformacao(this.filterForm.value), 'informacao');
          this.blockUI.stop();
        }, err => {
          this.blockUI.stop();
          this.tratarErro(err);
        }
      );
    }
  }

  protected posNgOnInit(): void {
    this.buscar(this.tipoEntradaService.getAll(), 'tipoEntradas');
    if (this.temPermissao(Role.ROLE_ROOT)) {
      this.buscar(this.igrejaService.getAll(), 'igrejas');
    }
  }
}
