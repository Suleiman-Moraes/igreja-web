import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-padrao-template',
  templateUrl: './input-padrao-template.component.html',
  styleUrls: ['./input-padrao-template.component.css']
})
export class InputPadraoTemplateComponent implements OnInit {

  @Input('for-name') forName: string;
  @Input('nome') nome: string;
  @Input('formulario') formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
