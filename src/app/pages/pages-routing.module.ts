import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'formapagamento', loadChildren: () => import('./modules/forma-pagamento/forma-pagamento.module').then(m => m.FormaPagamentoModule) },
  { path: 'igreja', loadChildren: () => import('./modules/igreja/igreja.module').then(m => m.IgrejaModule) },
  { path: 'permissao', loadChildren: () => import('./modules/permissao/permissao.module').then(m => m.PermissaoModule) },
  { path: 'tipoentrada', loadChildren: () => import('./modules/tipo-entrada/tipo-entrada.module').then(m => m.TipoEntradaModule) },
  { path: 'menu', loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule) },
  { path: 'itemmenu', loadChildren: () => import('./modules/item-menu/item-menu.module').then(m => m.ItemMenuModule) },
  { path: 'pessoa', loadChildren: () => import('./modules/pessoa/pessoa.module').then(m => m.PessoaModule) },
  { path: 'saida', loadChildren: () => import('./modules/saida/saida.module').then(m => m.SaidaModule) },
  { path: 'entrada', loadChildren: () => import('./modules/entrada/entrada.module').then(m => m.EntradaModule) },
  { path: '', redirectTo: 'pessoa/dizimista' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
