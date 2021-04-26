import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('formulario') formulario: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  public get errorMessage(): string | null {
    if (this.mustShowErrorMessage()) {
      return this.getErrorMessage();
    }
    else {
      return null;
    }
  }

  private getErrorMessage(): string | null {
    if (this.formulario.errors.required) {
      return "Dado Obrigatório";
    }
    else if (this.formulario.errors.maxlength) {
      const requiredLenght = this.formulario.errors.maxlength.requiredLength;
      return `Deve ter no máximo ${requiredLenght} caracteres`;
    }
    else if (this.formulario.errors.email) {
      return "Formato de e-mail Inválido";
    }
    else if (this.formulario.errors.pattern) {
      return "Formato Inválido";
    }
    else if (this.formulario.errors.minlength) {
      const requiredLenght = this.formulario.errors.minlength.requiredLength;
      return `Deve ter no mínimo ${requiredLenght} caracteres`;
    }

    //Custom
    else if (this.formulario.errors.customizado) {
      return `Erro customizado`;
    }
    else if (this.formulario.errors.cpfValid) {
      return `CPF Inválido`;
    }
    else if (this.formulario.errors.cnpjValid) {
      return `CNPJ Inválido`;
    }
  }

  private mustShowErrorMessage(): boolean {
    return this.formulario.invalid && this.formulario.touched;
  }
}
