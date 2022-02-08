import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { LancamentoFinanceiroService } from '../../../service/lancamento-financeiro.service';

@Component({
  selector: 'app-despesa-cadastrar',
  templateUrl: './despesa-cadastrar.page.html',
  styleUrls: ['./despesa-cadastrar.page.scss'],
})
export class DespesaCadastrarPage implements OnInit {

  public formulario: FormGroup;

  constructor(
    private lancamentoFinanceiroService: LancamentoFinanceiroService,
    private alertController: AlertController,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private router: Router,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      favorecido: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      produtoservico: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      valortotal: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }

  public createOne() {
    const lancamentoFinanceiroModel = this.lancamentoFinanceiroModel(
      this.formulario.value
    );
    console.log(lancamentoFinanceiroModel);
    const lancamentoFinanceiroModelSalvo = this.lancamentoFinanceiroService.createOne(lancamentoFinanceiroModel);
    this.router.navigate(["page-dashboard"]);
    this.showToastController();
    this.hideToastController();
    this.hideModalController();
  }

  private lancamentoFinanceiroModel(lancamentoFinanceiroModelParameter: any) {
    return {
      favorecido: lancamentoFinanceiroModelParameter.favorecido,
      produto_servico: lancamentoFinanceiroModelParameter.produtoservico,
      data_aquisicao: new Date(),
      valor_total_lancamento: lancamentoFinanceiroModelParameter.valortotal,
    };
  }

  private async showAlertController(lancamentoFinanceiroModel: any) {
    const alert = await this.alertController.create({
      message: lancamentoFinanceiroModel,
      animated: true,
    });
    return await alert.present();
  }

  private async showToastController() {
    const toast = await this.toastController.create({
      message: 'Despesa Cadastrada com Sucesso!',
    });
    return await toast.present();
  }

  private async hideToastController() {
    setTimeout( async () => {
      return await this.toastController.dismiss();
    }, 5000);
  }

  private redirecionarPaginaDashboard() {
    setTimeout( () => {
      return location.reload;
    }, 3000);
  }

  public clearFormulario() {
    return this.formulario.reset;
  }

  private async hideModalController() {
    return await this.modalController.dismiss();
  }

}
