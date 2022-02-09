import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablemenuPage } from './tablemenu.page';

const routes: Routes = [
  {
    path: '',
    component: TablemenuPage,
    children: [
      {
        path: 'tablemenu',
        loadChildren: () => import('../tablemenu/tablemenu.module').then( m => m.TablemenuPageModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablemenuPageRoutingModule {}
