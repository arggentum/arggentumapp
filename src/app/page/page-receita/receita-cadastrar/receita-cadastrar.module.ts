import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReceitaCadastrarPageRoutingModule } from './receita-cadastrar-routing.module';
import { ReceitaCadastrarPage } from './receita-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaCadastrarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReceitaCadastrarPage]
})
export class ReceitaCadastrarPageModule {}
