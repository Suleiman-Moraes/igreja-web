import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'pessoa', loadChildren: () => import('./modules/pessoa/pessoa.module').then(m => m.PessoaModule) },
  { path: 'saida', loadChildren: () => import('./modules/saida/saida.module').then(m => m.SaidaModule) },
  { path: 'entrada', loadChildren: () => import('./modules/entrada/entrada.module').then(m => m.EntradaModule) },
  { path: '', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
