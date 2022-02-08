import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferenciaCadastrarPage } from './transferencia-cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: TransferenciaCadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferenciaCadastrarPageRoutingModule {}
