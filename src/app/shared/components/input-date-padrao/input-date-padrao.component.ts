import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-date-padrao',
  templateUrl: './input-date-padrao.component.html',
  styleUrls: ['./input-date-padrao.component.css']
})
export class InputDatePadraoComponent implements OnInit {

  @Input('for-name') forName: string;
  @Input('nome') nome: string;
  @Input('min-date') minDate: Date = null;
  @Input('max-date') maxDate: Date = null;
  @Input('show-on-focus') showOnFocus: boolean = false;
  @Input('formulario') formulario: FormGroup;
  @Input('year-range-max') yearRangeMax: string = null;
  @Input('year-range-min') yearRangeMin: string = null;
  @Input('readonly-ynput') readonlyInput: boolean = false;
  @Input('date-format') dateFormat: string = 'dd/mm/yy';
  @Input() view: string = 'date';
  @Input() touch: boolean = false;

  yearRange: string = null;

  ptBR = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    dayNamesMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor() { }

  get touchUI(): any {
    return window.innerWidth <= 600;
  }

  ngOnInit(): void {
    const ano = this.maxDate ? this.maxDate.getFullYear() : new Date().getFullYear();
    this.yearRangeMax = !this.yearRangeMax ? `${this.maxDate ? this.maxDate.getFullYear() : (ano + 10)}` : this.yearRangeMax;
    this.yearRangeMin = !this.yearRangeMin ? `${this.minDate ? this.minDate.getFullYear() : (ano - 110)}` : this.yearRangeMin;
    this.yearRange = !this.yearRange ? `${this.yearRangeMin}:${this.yearRangeMax}` : this.yearRange;
  }

  ngOnChanges(changes: SimpleChanges) { }
}
