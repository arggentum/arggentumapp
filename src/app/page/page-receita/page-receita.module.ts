import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PageReceitaPageRoutingModule } from './page-receita-routing.module';
import { PageReceitaPage } from './page-receita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageReceitaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PageReceitaPage]
})
export class PageReceitaPageModule {}
