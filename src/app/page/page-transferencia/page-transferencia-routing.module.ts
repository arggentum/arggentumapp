import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTransferenciaPage } from './page-transferencia.page';

const routes: Routes = [
  {
    path: '',
    component: PageTransferenciaPage
  },
  {
    path: 'transferencia-cadastrar',
    loadChildren: () => import('./transferencia-cadastrar/transferencia-cadastrar.module').then( m => m.TransferenciaCadastrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTransferenciaPageRoutingModule {}
