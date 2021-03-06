import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Igreja';

  get getShowTemplate(): boolean {
    return sessionStorage.getItem('token') != null;
  }
}
