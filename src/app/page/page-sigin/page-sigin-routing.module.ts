import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSiginPage } from './page-sigin.page';

const routes: Routes = [
  {
    path: '',
    component: PageSiginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSiginPageRoutingModule {}
