import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ReceitaCadastrarPage } from './../page-receita/receita-cadastrar/receita-cadastrar.page';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.page.html',
  styleUrls: ['./page-dashboard.page.scss'],
})
export class PageDashboardPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.hideToastController();
  }

  public async openModalReceitas() {
    const modalReceita = await this.modalController.create({
      component: ReceitaCadastrarPage,
      swipeToClose: true,
      initialBreakpoint: 0.6
    });
    return await modalReceita.present();
  }

  private async hideToastController() {
    return await this.toastController.dismiss();
  }

}
