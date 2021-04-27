import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng-lts/api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIModule } from 'ng-block-ui';
import { JwtInterceptor } from './security/jwt.interceptor';
import { AuthGuard } from './security/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SideBarItemComponent } from './components/side-bar-item/side-bar-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';
import { SidebarModule } from 'primeng-lts/sidebar';
import { CardModule } from 'primeng-lts/card';
import { TieredMenuModule } from 'primeng-lts/tieredmenu';
import { AvatarComponent } from './components/avatar/avatar.component';

export function tokenGetter(): string {
  return atob(sessionStorage.getItem('token'));
}

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideBarComponent,
    SideBarItemComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BlockUIModule.forRoot({
      message: 'Carregando',
      delayStop: 500
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains,
        disallowedRoutes: environment.tokenDisallowedRoutes
      }
    }),
    FormsModule,
    ButtonModule,
    SidebarModule,
    CardModule,
    TieredMenuModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfirmationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
