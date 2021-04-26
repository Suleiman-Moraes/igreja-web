import { Component } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import * as BrV from 'br-validations';

@Component({
    template: ''
})
export class ValidatorsApiComponent {

    static customizado(control: AbstractControl): ValidationErrors | null {
        if (control.value !== undefined && (isNaN(control.value) || control.value == 123)) {
            return { 'customizado': true };
        }
        return null;
    }

    static cpfValid(control: AbstractControl): ValidationErrors | null {
        if (control.value !== undefined && control.value) {
            let cpf: string = (control.value + '').replace('\.', '').replace('\.', '').replace('-', '');
            console.log(ValidatorsApiComponent.validarCpf(cpf));
            if (!ValidatorsApiComponent.validarCpf(cpf)) {
                return { 'cpfValid': true };
            }
        }
        return null;
    }

    static cpfCnpjValid(control: AbstractControl): ValidationErrors | null {
        if (control.value !== undefined && control.value) {
            let cpfCnpj: string = (control.value + '').replace('\.', '').replace('\.', '').replace('-', '');
            if (cpfCnpj.length <= 11) {
                if (!ValidatorsApiComponent.validarCpf(cpfCnpj)) {
                    return { 'cpfValid': true };
                }
            }
            else {
                if (!ValidatorsApiComponent.validarCnpj(cpfCnpj)) {
                    return { 'cnpjValid': true };
                }
            }
        }
        return null;
    }

    private static validarCpf(strCpf): boolean {
        return BrV.cpf.validate(strCpf);
    }

    private static validarCnpj(strCnpj): boolean {
        return BrV.cnpj.validate(strCnpj);
    }
}