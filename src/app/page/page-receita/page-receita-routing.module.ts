import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageReceitaPage } from './page-receita.page';

const routes: Routes = [
  {
    path: '',
    component: PageReceitaPage
  },
  {
    path: 'receita-cadastrar',
    loadChildren: () => import('./receita-cadastrar/receita-cadastrar.module').then( m => m.ReceitaCadastrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageReceitaPageRoutingModule {}
