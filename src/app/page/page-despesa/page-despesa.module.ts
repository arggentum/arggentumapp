import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageDespesaPageRoutingModule } from './page-despesa-routing.module';

import { PageDespesaPage } from './page-despesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageDespesaPageRoutingModule
  ],
  declarations: [PageDespesaPage]
})
export class PageDespesaPageModule {}
