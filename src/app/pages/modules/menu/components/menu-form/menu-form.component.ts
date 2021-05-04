import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { MenuService } from 'src/app/pages/pages-shared/services/menu.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent extends BaseResourceFormComponent {

  constructor(
    protected injector: Injector,
    protected service: MenuService
  ) {
    super(injector, service);
  }

  //METHODS PRIVATE
  protected initForm(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.maxLength(50)]]
    });
  }

  protected posSubmitFormSucesso(): void {
    if (this.currentAction == 'new') {
      this.showSuccess('Menu incluído com sucesso!');
    }
    else {
      this.showSuccess('Menu atualizado com sucesso!');
    }
    this.location.back();
  }

  protected createPageTitle(): string {
    return 'Incluir Menu';
  }

  protected editionPageTitle(): string {
    return 'Editar Menu';
  }
}
