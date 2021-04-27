import { Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnderecoService } from 'src/app/pages/pages-shared/services/endereco.service';
import { BaseResourceUtilComponent } from 'src/app/shared/components/base-resource-util/base-resource-util.component';

@Component({
  selector: 'app-endereco-recycle',
  templateUrl: './endereco-recycle.component.html',
  styleUrls: ['./endereco-recycle.component.css']
})
export class EnderecoRecycleComponent extends BaseResourceUtilComponent implements OnInit, OnChanges {

  @Input() formulario: FormGroup;
  @Input('estado-form') estadoForm: FormGroup;
  @Input() estados: any = [];

  constructor(
    protected injector: Injector,
    private service: EnderecoService
  ) {
    super(injector);
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  carregarEnderecoCorreio(): void {
    if (this.formulario.value.cep && (this.formulario.value.cep + '').length == 8) {
      this.service.carregarEnderecoCorreio(this.formulario.value.cep).subscribe(
        (resource) => {
          if (resource != null) {
            if (this.estados) {
              this.estadoForm.get('id').setValue(this.estados.filter(es => es.uf == resource.uf)[0].id);
            }
            this.formulario.get('complemento').setValue(resource.complemento);
            this.formulario.get('rua').setValue(resource.logradouro);
            this.formulario.get('bairro').setValue(resource.bairro);
          }
        }
      );
    }
  }
}
