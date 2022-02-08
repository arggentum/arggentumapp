import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablemenuPage } from './tablemenu.page';

const routes: Routes = [
  {
    path: '',
    component: TablemenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablemenuPageRoutingModule {}
