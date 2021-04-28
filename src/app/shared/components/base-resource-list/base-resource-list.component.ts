import { Component, Injector, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseResourceService } from "../base-resource-service/base-resource.service";
import { BaseResourceUtilComponent } from "../base-resource-util/base-resource-util.component";

@Component({
    template: ''
})
export abstract class BaseResourceListComponent extends BaseResourceUtilComponent implements OnInit, OnChanges {

    page: number = 0;
    size: number = 10;
    resources;
    filterForm: FormGroup;
    title: string = '';
    router: Router;

    hoje = new Date();

    protected titleService: Title;
    protected route: ActivatedRoute;

    //Permissões
    constructor(
        private resourceService: BaseResourceService,
        protected injector: Injector
    ) {
        super(injector);
        this.router = this.injector.get(Router);
        this.route = this.injector.get(ActivatedRoute);
        this.titleService = injector.get(Title);
    }

    ngOnInit(): void {
        new Promise((resolve, reject) => {
            this.buildForm();
            resolve(0);
        }).then((_) => this.findByPararamsFilter());
        this.posNgOnInit();
    }

    ngOnChanges(changes: SimpleChanges) { }

    // getSituacaoEnum(tipo: string): string{
    //   return SituacaoEnum[tipo];
    // }

    paginate(event?: any) {
        if (event) {
            this.size = event.rows;
            this.page = event.page;
            this.filterForm.get('size').setValue(this.size);
            this.filterForm.get('page').setValue(this.page);
        }
        this.findByPararamsFilter();
    }

    buildForm(): void {
        this.filterForm = this.formBuilder.group({
            page: [this.page],
            size: [this.size]
        });
    }

    deleteById(id): void {
        this.openConfirmDialog('Confirma remover esse registro?', () => {
            this.tratarUpdateRegistro(this.resourceService.delete(id));
        }, () => { });
    }

    //PRIVATE METHODS
    protected findByPararamsFilter(): void {
        this.resourceService.findByPararamsFilter(this.filterForm.value).subscribe(
            responseApi => {
                this.tratarResponseApi(responseApi);
            }, err => {
                this.tratarErro(err);
            }
        );
    }

    protected tratarResponseApi(responseApi: any): void {
        if (responseApi != null) {
            this.resources = responseApi;
            if (this.resources.totalElements == 0) {
                this.showWarning('Nenhum Registro Encontrado.');
            }
        }
        else { }
    }

    protected download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', text);
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    protected tratarUpdateRegistro(metodo): void {
        this.blockUI.start();
        metodo.subscribe(
            responseApi => {
                this.blockUI.stop();
                if (responseApi != null) {
                    this.showSuccess('Registro atualizado com Sucesso.');
                    this.paginate();
                }
            }, err => {
                this.blockUI.stop();
                this.tratarErro(err);
            }
        );
    }

    //OPCIONAIS
    protected posNgOnInit(): void { }
}