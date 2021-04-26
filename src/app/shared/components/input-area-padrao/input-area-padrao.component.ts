import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-area-padrao',
  templateUrl: './input-area-padrao.component.html',
  styleUrls: ['./input-area-padrao.component.css']
})
export class InputAreaPadraoComponent implements OnInit {

  @Input('for-name') forName: string;
  @Input('nome') nome: string;
  @Input('formulario') formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
