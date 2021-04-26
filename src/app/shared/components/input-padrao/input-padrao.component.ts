import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-padrao',
  templateUrl: './input-padrao.component.html',
  styleUrls: ['./input-padrao.component.css']
})
export class InputPadraoComponent implements OnInit {

  @Input('for-name') forName: string;
  @Input('nome') nome: string;
  @Input('formulario') formulario: FormGroup;
  @Input() mask: string = null;
  @Input() imask: any = null;
  @Input('auto-clear') autoClear: boolean = true;

  @Output('blur') blur: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(event): void {
    this.blur.emit(event);
  }
}
