import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageLoginPageRoutingModule } from './page-login-routing.module';
import { PageLoginPage } from './page-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PageLoginPage]
})
export class PageLoginPageModule {}
