import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';
import { UsuarioService } from 'src/app/pages/pages-shared/services/usuario.service';

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
  user: any = {};

  isDark: boolean = false;

  items: MenuItem[];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.user = this.usuarioService.getUsuario();
    let themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
    this.isDark = themeLink.href.indexOf(this.themeDark) >= 0;
    if (sessionStorage.getItem('isDark') && sessionStorage.getItem('isDark') != this.isDark + '') {
      this.changeTheme();
    }
    else {
      sessionStorage.setItem('isDark', this.isDark + '');
    }
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
