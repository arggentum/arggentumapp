import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageTransferenciaPageRoutingModule } from './page-transferencia-routing.module';

import { PageTransferenciaPage } from './page-transferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageTransferenciaPageRoutingModule
  ],
  declarations: [PageTransferenciaPage]
})
export class PageTransferenciaPageModule {}
