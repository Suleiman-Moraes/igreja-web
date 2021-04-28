import { Component, Injector, OnInit, SimpleChanges } from '@angular/core';
import { PessoaService } from 'src/app/pages/pages-shared/services/pessoa.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent extends BaseResourceListComponent {

  constructor(
    protected service: PessoaService,
    protected injector: Injector
  ) {
    super(service, injector);
  }

  buildForm(): void {
    this.filterForm = this.formBuilder.group({
      page: [this.page],
      size: [this.size]
    });
  }

  //PRIVATE METHODS
  // protected findByPararamsFilter(): void {
  //   if (this.filterForm) {
  //     this.service.findByParams(this.filterForm.value).subscribe(
  //       responseApi => {
  //         this.tratarResponseApi(responseApi);
  //       }, err => {
  //         this.tratarErro(err);
  //       }
  //     );
  //   }
  // }
}
