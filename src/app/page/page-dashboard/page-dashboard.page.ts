import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ReceitaCadastrarPage } from './../page-receita/receita-cadastrar/receita-cadastrar.page';
import { DespesaCadastrarPage } from '../page-despesa/despesa-cadastrar/despesa-cadastrar.page';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.page.html',
  styleUrls: ['./page-dashboard.page.scss'],
})
export class PageDashboardPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.hideToastController();
  }

  public async openModalReceitas() {
    const modalReceita = await this.modalController.create({
      component: ReceitaCadastrarPage,
      swipeToClose: true,
      initialBreakpoint: 0.6,
    });
    return await modalReceita.present();
  }

  public async openModalDespesas() {
    const modalDespesa = await this.modalController.create({
      component: DespesaCadastrarPage,
      swipeToClose: true,
      initialBreakpoint: 0.6,
    });
    return await modalDespesa.present();
  }

  public async openFaturas() {
    const toastController = await this.toastController.create({
      message: 'Funcionalidade não Implementada',
      duration: 2000
    });
    return toastController.present();
  }

  public async openTransferencia() {
    const toastController = await this.toastController.create({
      message: 'Funcionalidade não Implementada',
      duration: 2000
    });
    return toastController.present();
  }

  private async hideToastController() {
    return await this.toastController.dismiss();
  }
}
