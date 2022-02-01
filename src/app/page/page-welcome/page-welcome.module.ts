import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageWelcomePageRoutingModule } from './page-welcome-routing.module';

import { PageWelcomePage } from './page-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageWelcomePageRoutingModule
  ],
  declarations: [PageWelcomePage]
})
export class PageWelcomePageModule {}
