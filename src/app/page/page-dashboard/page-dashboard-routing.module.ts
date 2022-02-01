import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageDashboardPage } from './page-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PageDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageDashboardPageRoutingModule {}
