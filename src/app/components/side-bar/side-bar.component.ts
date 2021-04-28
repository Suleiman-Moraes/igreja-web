import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  menus: any[] = [
    {
      id: 1,
      nome: 'Lançamentos',
      icon: 'pi pi-pencil',
      menuPai: null,
      itens: [
        {
          nome: 'Saídas',
          icon: 'pi pi-pencil',
          url: '#/pages/saida'
        },
        {
          nome: 'Entradas',
          icon: 'pi pi-pencil',
          url: '#/pages/colaborador'
        }
      ]
    },
    {
      id: 1,
      nome: 'Gerência',
      icon: 'pi pi-pencil',
      menuPai: null,
      itens: [
        {
          nome: 'Pessoas',
          icon: 'pi pi-pencil',
          url: '#/pages/pessoa'
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void { }

}
