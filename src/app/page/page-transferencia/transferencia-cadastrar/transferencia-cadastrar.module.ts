import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferenciaCadastrarPageRoutingModule } from './transferencia-cadastrar-routing.module';

import { TransferenciaCadastrarPage } from './transferencia-cadastrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferenciaCadastrarPageRoutingModule
  ],
  declarations: [TransferenciaCadastrarPage]
})
export class TransferenciaCadastrarPageModule {}
