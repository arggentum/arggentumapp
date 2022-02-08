import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablemenuPageRoutingModule } from './tablemenu-routing.module';

import { TablemenuPage } from './tablemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablemenuPageRoutingModule
  ],
  declarations: [TablemenuPage]
})
export class TablemenuPageModule {}
