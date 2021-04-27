import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  public static showTemplate: boolean = true;
  visibleSidebar = false;

  private themeDark: string = 'assets/css/themes/dark/theme.css';
  private themeLight: string = 'assets/css/themes/light/theme.css';

  isDark: boolean = false;

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    let themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
    this.isDark = themeLink.href.indexOf(this.themeDark) >= 0;
    if (sessionStorage.getItem('isDark') && sessionStorage.getItem('isDark') != this.isDark + '') {
      this.changeTheme();
    }
    else {
      sessionStorage.setItem('isDark', this.isDark + '');
    }

    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil'
      },
      {
        separator: true
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }

  get getShowTemplate(): boolean {
    return sessionStorage.getItem('token') != null;
  }

  openCloseSideBar(event?: Event): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.visibleSidebar = !this.visibleSidebar;
  }

  changeTheme(event?: Event) {
    // if (event) {
    //   event.stopPropagation();
    //   event.preventDefault();
    // }
    let themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
    if (themeLink.href.indexOf(this.themeDark) >= 0) {
      themeLink.href = this.themeLight;
    }
    else {
      themeLink.href = this.themeDark;
    }
    this.isDark = !this.isDark;
    sessionStorage.setItem('isDark', this.isDark + '');
  }

  pesquisarMenu() { }
}
