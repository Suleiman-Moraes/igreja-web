import { Location } from "@angular/common";
import { Component, EventEmitter, Injector } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { ConfirmationService } from "primeng-lts/api";
import toastr from "toastr";
import { environment } from "src/environments/environment";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    template: ''
})
export abstract class BaseResourceUtilComponent {

    formulario: FormGroup;
    @BlockUI() blockUI: NgBlockUI;

    protected location: Location;
    protected formBuilder: FormBuilder;
    protected confirmationService: ConfirmationService;

    imaskTelefone = {
        mask: [
            {
                mask: "0000-0000"
            },
            {
                mask: "0 0000-0000"
            }
        ]
    }

    constructor(
        protected injector: Injector
    ) {
        this.location = this.injector.get(Location);
        this.formBuilder = this.injector.get(FormBuilder);
        this.confirmationService = this.injector.get(ConfirmationService);
    }

    situacoes = {
        A: 'Ativo',
        I: 'Inativo'
    };

    simNaoEnum = {
        S: 'Sim',
        N: 'Não'
    };

    sexoEnum = {
        I: 'Indeterminado',
        M: 'Masculino',
        F: 'Feminino'
    }

    get situacaoOptions(): Array<any> {
        if (!this['situacaoOptionsVar']) {
            this['situacaoOptionsVar'] = this.getTypes(this.situacoes);
        }
        return this['situacaoOptionsVar'];
    }

    get simNaoEnumOptions(): Array<any> {
        if (!this['simNaoEnumOptionsVar']) {
            this['simNaoEnumOptionsVar'] = this.getTypes(this.simNaoEnum);
        }
        return this['simNaoEnumOptionsVar'];
    }

    get sexoEnumOptions(): Array<any> {
        if (!this['sexoEnumOptionsVar']) {
            this['sexoEnumOptionsVar'] = this.getTypes(this.sexoEnum);
        }
        return this['sexoEnumOptionsVar'];
    }


    convertToNumber(string: string): number {
        return new Number(string).valueOf()
    }

    isNotNulAndNotEmpty(x): boolean {
        return x && x != '';
    }

    back(): void {
        this.location.back();
    }

    openConfirmDialog(message: string, accept: Function, reject: Function): void {
        this.confirmationService.confirm({
            message: message,
            header: 'Confirmação',
            icon: 'pi pi-info-circle',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            accept: accept,
            reject: reject
        });
    }

    //PRIVATES METHODS
    protected tratarErro(err): void {
        if (typeof err === 'string') {
            this.showError(err);
        }
        else if (err instanceof HttpErrorResponse
            && err.status >= 400 && err.status <= 499) {

            if (err.status == 401) {
                this.erroServidor();
                window.location.href = environment.URL_LOGIN
            }
            else if (err.status == 403) {
                this.showError('Operação não autorizada.');
            }
            else {
                try {
                    this.showError(err.error[0].mensagemUsuario);
                } catch (e) { }
            }
        }
        else {
            this.erroServidor();
        }
        console.error('Ocorreu um erro', err);
        this.posTratarErro();
    }

    protected erroServidor(): void {
        this.showError('Ocorreu um erro ao processar a sua solicitação.');
    }

    protected getTypes(type: any): any {
        return Object.entries(type).map(
            ([value, text]) => {
                return {
                    text: text,
                    value: value
                }
            }
        );
    }

    protected formId(required?): FormGroup {
        return this.formBuilder.group({
            id: [null, (required ? Validators.required : null)]
        });
    }

    protected markAsTouched(form: FormGroup): void {
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control instanceof FormControl) {
                (control.valueChanges as EventEmitter<any>).emit(control.value);
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                this.markAsTouched(control);
            }
        });
    }

    protected disableComponents(form: FormGroup, disable: boolean): void {
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control instanceof FormControl) {
                if (disable) {
                    control.disabled;
                    control.disable();
                }
                else {
                    control.enabled;
                    control.enable();
                }
            }
            else if (control instanceof FormGroup) {
                this.disableComponents(control, disable);
            }
        });
    }

    protected disableControls(form: FormGroup, name: string, disable: boolean): void {
        if (disable) {
            form.get(name).disabled;
            form.get(name).disable();
            form.get(name).setValue(null);
        }
        else {
            form.get(name).enabled;
            form.get(name).enable();
        }
    }

    protected realizarRequisicaoSimples(metodo, atributo, func): void {
        metodo.subscribe(
            (responseApi: any) => {
                if (responseApi != null) {
                    this[atributo] = responseApi;
                    if (func != null) {
                        func();
                    }
                }
                else { }
            }, err => {
                this.tratarErro(err);
            }
        );
    }

    protected buscar(metodo, atributo: string, func?: any): void {
        metodo.subscribe(res => {
            this[atributo] = res;
            if (func != null) {
                func();
            }
        });
    }

    protected showError(detail: string) {
        toastr.error(detail, 'Error Message', {
            timeOut: 5000
        });
    }

    protected showSuccess(detail: string) {
        toastr.success(detail, 'Sucesso', {
            timeOut: 5000
        });
    }

    protected showWarning(detail: string) {
        toastr.warning(detail, 'Atenção', {
            timeOut: 5000
        });
    }

    //OPICIONAIS
    protected posTratarErro(): void { }
}