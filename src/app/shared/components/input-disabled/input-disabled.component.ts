import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-disabled',
  templateUrl: './input-disabled.component.html',
  styleUrls: ['./input-disabled.component.css']
})
export class InputDisabledComponent implements OnInit {

  @Input('for-name') forName: string;
  @Input() nome: string;
  @Input() formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
