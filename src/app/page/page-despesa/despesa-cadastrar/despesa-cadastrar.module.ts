import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DespesaCadastrarPageRoutingModule } from './despesa-cadastrar-routing.module';
import { DespesaCadastrarPage } from './despesa-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespesaCadastrarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DespesaCadastrarPage]
})
export class DespesaCadastrarPageModule {}
