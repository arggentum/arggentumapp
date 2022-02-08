import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LancamentoFinanceiroService } from '../../../service/lancamento-financeiro.service';

@Component({
  selector: 'app-despesa-cadastrar',
  templateUrl: './despesa-cadastrar.page.html',
  styleUrls: ['./despesa-cadastrar.page.scss'],
})
export class DespesaCadastrarPage implements OnInit {

  constructor(
    private lancamentoFinanceiroService: LancamentoFinanceiroService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.lancamentoFinanceiroService.findAll().subscribe( response => {
      console.log(response);
      this.showAlertController(response);
    })
  }

  private async showAlertController(lancamentoFinanceiroModel: any) {
    const alert = await this.alertController.create({
      message: lancamentoFinanceiroModel
    });
    return await alert.present();
  }

}
