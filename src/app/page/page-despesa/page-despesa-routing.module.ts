import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDespesaPage } from './page-despesa.page';

const routes: Routes = [
  {
    path: '',
    component: PageDespesaPage
  },
  {
    path: 'despesa-cadastrar',
    loadChildren: () => import('./despesa-cadastrar/despesa-cadastrar.module').then( m => m.DespesaCadastrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDespesaPageRoutingModule {}
