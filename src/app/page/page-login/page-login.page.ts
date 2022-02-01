import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.page.html',
  styleUrls: ['./page-login.page.scss'],
})
export class PageLoginPage implements OnInit {

  public formulario: FormGroup;
  public type: string = "password";
  public icon: string = "eye-off";

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      senha: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    });
  }

  public login() {
    const usuarioModel = this.formulario.value;
    this.authenticationService.loginEmailAndPassword(usuarioModel);
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

  private async apresentarAlertaAplication(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

}
