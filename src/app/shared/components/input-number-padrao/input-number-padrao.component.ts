import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-number-padrao',
  templateUrl: './input-number-padrao.component.html',
  styleUrls: ['./input-number-padrao.component.css']
})
export class InputNumberPadraoComponent implements OnInit {

  @Input('for-name') forName: string;
  @Input('nome') nome: string;
  @Input('formulario') formulario: FormGroup;
  @Input('use-grouping') useGrouping: boolean = false;
  @Input('max-fraction-digits') maxFractionDigits: number = null;
  @Input('min-fraction-digits') minFractionDigits: number = null;
  @Input() money: boolean = false;
  @Input() max: number = 100000000;
  @Input() min: number = 0;

  @Output('blur') blur: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(event): void {
    this.blur.emit(event);
  }
}
