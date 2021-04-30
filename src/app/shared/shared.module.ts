import { NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ConfirmationService } from 'primeng-lts/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng-lts/dropdown';
import { ConfirmDialogModule } from 'primeng-lts/confirmdialog';
import { CalendarModule } from 'primeng-lts/calendar';
import { IMaskModule } from 'angular-imask';
import { InputTextModule } from 'primeng-lts/inputtext';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { InputMaskModule } from 'primeng-lts/inputmask';
import { InputNumberModule } from 'primeng-lts/inputnumber';
import { ButtonModule } from 'primeng-lts/button';
import { ComboBoxPadraoComponent } from './components/combo-box-padrao/combo-box-padrao.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { InputAreaPadraoComponent } from './components/input-area-padrao/input-area-padrao.component';
import { InputDatePadraoComponent } from './components/input-date-padrao/input-date-padrao.component';
import { InputDisabledComponent } from './components/input-disabled/input-disabled.component';
import { InputNumberPadraoComponent } from './components/input-number-padrao/input-number-padrao.component';
import { InputPadraoComponent } from './components/input-padrao/input-padrao.component';
import { InputPadraoTemplateComponent } from './components/input-padrao-template/input-padrao-template.component';
import { PrimeNgCalendarMaskDirective } from './directives/prime-ng-calendar-mask.directive';
import { CpfCnpjFormatPipe } from './pipes/cpf-cnpj-format.pipe';
import { MaskDinamicPipe } from './pipes/mask-dinamic.pipe';
import { ValueBooleanPipe } from './pipes/value-boolean.pipe';
import { ValueOrTracePipe } from './pipes/value-or-trace.pipe';
import { CardModule } from 'primeng-lts/card';
import { PasswordModule } from 'primeng-lts/password';
import { PanelModule } from 'primeng-lts/panel';
import { TelefoneMaskPipe } from './pipes/telefone-mask.pipe';
import { PaginatorModule } from 'primeng-lts/paginator';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    ComboBoxPadraoComponent,
    FormFieldErrorComponent,
    InputAreaPadraoComponent,
    InputDatePadraoComponent,
    InputDisabledComponent,
    InputNumberPadraoComponent,
    InputPadraoComponent,
    InputPadraoTemplateComponent,
    PrimeNgCalendarMaskDirective,
    CpfCnpjFormatPipe,
    MaskDinamicPipe,
    ValueBooleanPipe,
    ValueOrTracePipe,
    TelefoneMaskPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    IMaskModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    CardModule,
    PasswordModule,
    PanelModule,
    PaginatorModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    IMaskModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    CardModule,
    PasswordModule,
    PanelModule,
    PaginatorModule,

    //Components
    ComboBoxPadraoComponent,
    FormFieldErrorComponent,
    InputAreaPadraoComponent,
    InputDatePadraoComponent,
    InputDisabledComponent,
    InputNumberPadraoComponent,
    InputPadraoComponent,
    InputPadraoTemplateComponent,

    //Pipes
    CpfCnpjFormatPipe,
    MaskDinamicPipe,
    ValueBooleanPipe,
    ValueOrTracePipe,
    TelefoneMaskPipe,

    //Directives
    PrimeNgCalendarMaskDirective
  ],
  providers: [
    ConfirmationService
  ]
})
export class SharedModule { }
