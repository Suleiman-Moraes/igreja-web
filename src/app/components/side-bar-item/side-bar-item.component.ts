import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.css']
})
export class SideBarItemComponent implements OnInit {

  @Input() menus: any[];

  ariaExpanded: boolean[] = [];
  itemComFilhos: any[] = [];
  itenSemFilhos: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < this.menus.length; i++) {
      this.ariaExpanded.push(false);
    }
  }

  navegar(url: string, event?: Event): void {
    this.router.navigate([url.replace('#', '')]);
  }

  clickExpand(i): void {
    this.ariaExpanded[i] = !this.ariaExpanded[i];
    for (let j = 0; j < this.menus.length; j++) {
      if (j != i) {
        this.ariaExpanded[j] = false;
      }
    }
  }
}
