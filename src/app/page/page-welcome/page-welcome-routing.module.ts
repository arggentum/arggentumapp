import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageWelcomePage } from './page-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: PageWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWelcomePageRoutingModule {}
