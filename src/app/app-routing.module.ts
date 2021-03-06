import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-welcome',
    pathMatch: 'full'
  },
  {
    path: 'page-welcome',
    loadChildren: () => import('./page/page-welcome/page-welcome.module').then( m => m.PageWelcomePageModule)
  },
  {
    path: 'page-login',
    loadChildren: () => import('./page/page-login/page-login.module').then( m => m.PageLoginPageModule)
  },
  {
    path: 'page-sigin',
    loadChildren: () => import('./page/page-sigin/page-sigin.module').then( m => m.PageSiginPageModule)
  },
  {
    path: 'page-dashboard',
    loadChildren: () => import('./page/page-dashboard/page-dashboard.module').then( m => m.PageDashboardPageModule)
  },
  {
    path: 'page-receita',
    loadChildren: () => import('./page/page-receita/page-receita.module').then( m => m.PageReceitaPageModule)
  },  {
    path: 'page-despesa',
    loadChildren: () => import('./page/page-despesa/page-despesa.module').then( m => m.PageDespesaPageModule)
  },
  {
    path: 'page-transferencia',
    loadChildren: () => import('./page/page-transferencia/page-transferencia.module').then( m => m.PageTransferenciaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
