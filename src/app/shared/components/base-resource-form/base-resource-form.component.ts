import { AfterContentChecked, Component, Injector, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { BaseResourceService } from "../base-resource-service/base-resource.service";
import { BaseResourceUtilComponent } from "../base-resource-util/base-resource-util.component";

@Component({
    template: ''
})
export abstract class BaseResourceFormComponent extends BaseResourceUtilComponent implements OnInit, AfterContentChecked, OnChanges {

    formulario: FormGroup;
    currentAction: string;
    pageTitle: string;
    resource: any;
    urlList: string = '/dividaativa';
    maxDate: Date = new Date();
    minDate: Date = new Date();
    tipos: string[] = ['pdf', 'doc', 'docx', 'png', 'PNG', 'jpg', 'xls'];

    protected route: ActivatedRoute;
    protected router: Router;

    constructor(
        protected injector: Injector,
        protected resourceService: BaseResourceService
    ) {
        super(injector);
        this.route = this.injector.get(ActivatedRoute);
        this.router = this.injector.get(Router);
    }

    ngOnInit(): void {
        this.setCurrentAction();
        this.initForm();
        this.loadResource();
        this.posNgOnInit();
    }

    ngOnChanges(changes: SimpleChanges) { }

    ngAfterContentChecked() {
        this.setPageTitle();
        this.posNgAfterContentChecked();
    }

    submitForm(): void {
        this.blockUI.start();
        this.markAsTouched(this.formulario);
        this.beforeSubmitForm();
        this.resource = this.formulario.value;
        this.resourceService.enviarFormulario(this.resource, (this.resource.id != null && this.resource.id > 0)).subscribe(
            responseApi => {
                this.blockUI.stop();
                this.tratarResponseSubimit(responseApi);
            }, err => {
                this.blockUI.stop();
                this.tratarErro(err);
            }
        );
    }

    download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', text);
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    //PRIVATES METHODS
    protected setCurrentAction() {
        if (this.route.snapshot.url[0].path == "new") {
            this.currentAction = "new";
        }
        else {
            this.currentAction = "edit";
        }
    }

    protected setPageTitle() {
        if (this.currentAction == "new") {
            this.pageTitle = this.createPageTitle();
        }
        else {
            this.pageTitle = this.editionPageTitle();
        }
    }

    protected createPageTitle(): string {
        return 'Novo';
    }

    protected editionPageTitle(): string {
        return 'Edição';
    }

    protected loadResource(): void {
        if (this.currentAction == 'edit') {
            let id: string = '';
            this.route.paramMap.pipe(
                switchMap(params => params.get('id'))
            ).subscribe(
                (param) => {
                    id += param;
                }
            );
            this.realizarRequisicaoSimples(this.resourceService.getById(Number(id)), 'resource', () => {
                if (this.resource.id == null) {
                    this.showError('Nenhum Registro encontrado.');
                }
                this.beforePatchValue();
                this.formulario.patchValue(this.resource);
                this.posLoadResource();
            });
        }
    }

    protected tratarResponseSubimit(responseApi: any): void {
        if (responseApi != null) {
            this.resource = responseApi;
            this.formulario.get('id').setValue(this.resource.id);
            this.beforePatchValue();
            this.posSubmitFormSucesso();
            this.formulario.patchValue(this.resource);
        }
    }

    //OPICIONAIS
    protected beforePatchValue(): void { }
    protected posLoadResource(): void { }
    protected posNgOnInit(): void { }
    protected posNgAfterContentChecked(): void { }
    protected beforeSubmitForm(): void { }
    protected acceptOrRejectConfirmDialog(aceito: boolean): void { }


    //ABSTRACT
    protected abstract initForm(): void;
    protected abstract posSubmitFormSucesso(): void;
}