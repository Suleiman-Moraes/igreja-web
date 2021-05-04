import { Component, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ItemMenuService } from 'src/app/pages/pages-shared/services/item-menu.service';
import { MenuService } from 'src/app/pages/pages-shared/services/menu.service';
import { PermissaoService } from 'src/app/pages/pages-shared/services/permissao.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-item-menu-form',
  templateUrl: './item-menu-form.component.html',
  styleUrls: ['./item-menu-form.component.css']
})
export class ItemMenuFormComponent extends BaseResourceFormComponent {

  menuForm: FormGroup;

  menus: any[];
  permissoes: any[];
  selecionadas: any[] = [];

  constructor(
    protected injector: Injector,
    protected service: ItemMenuService,
    private menuService: MenuService,
    private permissaoService: PermissaoService
  ) {
    super(injector, service);
  }

  //METHODS PRIVATE
  protected initForm(): void {
    this.menuForm = this.formId(true);
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.maxLength(50)]],
      icon: [null, [Validators.required, Validators.maxLength(50)]],
      url: [null, [Validators.required, Validators.maxLength(100)]],
      ativo: [null],
      permissoes: [null],
      menu: this.menuForm
    });
  }

  protected posSubmitFormSucesso(): void {
    if (this.currentAction == 'new') {
      this.showSuccess('Item de Menu incluído com sucesso!');
    }
    else {
      this.showSuccess('Item de Menu atualizado com sucesso!');
    }
    this.location.back();
  }

  protected createPageTitle(): string {
    return 'Incluir Item de Menu';
  }

  protected editionPageTitle(): string {
    return 'Editar Item de Menu';
  }

  protected posLoadResource(): void {
    this.selecionadas = this.formulario.value.permissoes ? this.formulario.value.permissoes : [];
    this.tratarPermissoes();
  }

  protected beforeSubmitForm(): void {
    this.formulario.get('permissoes').setValue(this.selecionadas);
  }

  protected posNgOnInit(): void {
    this.buscar(this.menuService.findBy(), 'menus');
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
