import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
