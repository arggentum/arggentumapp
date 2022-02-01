import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageSiginPageRoutingModule } from './page-sigin-routing.module';

import { PageSiginPage } from './page-sigin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageSiginPageRoutingModule
  ],
  declarations: [PageSiginPage]
})
export class PageSiginPageModule {}
