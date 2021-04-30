import { Component, Injector, OnInit } from '@angular/core';
import { IgrejaService } from 'src/app/pages/pages-shared/services/igreja.service';
import { SaidaService } from 'src/app/pages/pages-shared/services/saida.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-saida-list',
  templateUrl: './saida-list.component.html',
  styleUrls: ['./saida-list.component.css']
})
export class SaidaListComponent extends BaseResourceListComponent {

  igrejas: any[];

  constructor(
    protected service: SaidaService,
    protected injector: Injector,
    private igrejaService: IgrejaService
  ) {
    super(service, injector);
  }

  buildForm(): void {
    this.filterForm = this.formBuilder.group({
      page: [this.page],
      size: [this.size],
      id: [null],
      igrejaId: [null],
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
      this.service.findByParams(this.filterForm.value).subscribe(
        responseApi => {
          this.tratarResponseApi(responseApi);
          this.service.sendData({ carregarInformacoes: { filter: this.filterForm.value } });
        }, err => {
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
