import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-sigin',
  templateUrl: './page-sigin.page.html',
  styleUrls: ['./page-sigin.page.scss'],
})
export class PageSiginPage implements OnInit {

  public formulario: FormGroup;
  public type: string = "password";
  public icon: string = "eye-off";

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      email: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      senha: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      contrasenha: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
    });
  }

  public async isHabilitarIcone() {
    if(this.type == "password") {
      this.type = "text";
      this.icon = "eye"
    } else {
      this.type = "password";
      this.icon = "eye-off"
    }
  }

  public create() {
    const usuarioModel = this.formulario.value;
    if(usuarioModel.senha != usuarioModel.contrasenha) {
      return this.apresentarAlertaAplication("Error", "As senhas estão Divergentes!");
    } else {
      this.authenticationService.createEmailAndPassword(usuarioModel);
      this.router.navigate(["page-login"]);
    }
  }

  public login() {
    const usuarioModel = this.formulario.value;
    this.authenticationService.loginEmailAndPassword(usuarioModel);
  }

  private async apresentarAlertaAplication(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Confirmar',
          handler: () => { }
        }
      ]
    });
    await alert.present();
  }

}
