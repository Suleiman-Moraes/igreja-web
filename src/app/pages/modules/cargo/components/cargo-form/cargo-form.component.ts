import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { CargoService } from 'src/app/pages/pages-shared/services/cargo.service';
import { PermissaoService } from 'src/app/pages/pages-shared/services/permissao.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent extends BaseResourceFormComponent {

  permissoes: any[];
  selecionadas: any[] = [];

  constructor(
    protected injector: Injector,
    protected service: CargoService,
    private permissaoService: PermissaoService
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
      descricao: [null, [Validators.maxLength(300)]],
      permissoes: [null]
    });
  }

  protected posSubmitFormSucesso(): void {
    if (this.currentAction == 'new') {
      this.showSuccess('Cargo incluído com sucesso!');
    }
    else {
      this.showSuccess('Cargo atualizado com sucesso!');
    }
    this.location.back();
  }

  protected createPageTitle(): string {
    return 'Incluir Cargo';
  }

  protected editionPageTitle(): string {
    return 'Editar Cargo';
  }

  protected posLoadResource(): void {
    this.selecionadas = this.formulario.value.permissoes ? this.formulario.value.permissoes : [];
    this.tratarPermissoes();
  }

  protected beforeSubmitForm(): void {
    this.formulario.get('permissoes').setValue(this.selecionadas);
  }

  protected posNgOnInit(): void {
    this.buscar(this.permissaoService.getAll(), 'permissoes', () => {
      this.tratarPermissoes();
    });
  }

  private tratarPermissoes(): void {
    if (this.currentAction == 'edit' && this.permissoes) {
      this.permissoes = this.permissoes.filter(p => {
        for (let i = 0; i < this.selecionadas.length; i++) {
          if (this.selecionadas[i].id == p.id) {
            return false;
          }
        }
        return true;
      });
    }
  }
}
