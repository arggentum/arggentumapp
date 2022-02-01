import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDashboardPageRoutingModule } from './page-dashboard-routing.module';

import { PageDashboardPage } from './page-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDashboardPageRoutingModule
  ],
  declarations: [PageDashboardPage]
})
export class PageDashboardPageModule {}
