import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { setInterval } from 'timers';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  public loginEmailAndPassword(usuarioModel: any) {
    this.apresentarLoading();
    setTimeout( () => {
    this.angularFireAuth.signInWithEmailAndPassword(usuarioModel.email, usuarioModel.senha).then( () => {
          localStorage.setItem('TOKEN', 'true');
          this.router.navigate(['page-dashboard']);
          this.loadingController.dismiss();
        },
        (error) => {
          console.error('Erro ao tentar realizar o login do usuário!');
        }
      );
    }, 3000);
  }

  public createEmailAndPassword(usuarioModel: any) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(usuarioModel.email, usuarioModel.senha)
      .then(
        () => {},
        (error) => {
          console.error(error.message);
        }
      );
  }

  public signOut(usuarioModel: any) {
    this.angularFireAuth.signOut().then(
      () => {
        localStorage.removeItem('TOKEN');
        this.router.navigate(['page-login']);
      },
      (error) => {
        console.error(error.message);
      }
    );
  }

  private async apresentarLoading() {
    const loading = await this.loadingController.create({
      message: 'Validando Dados...'
    });
    return await loading.present();
  }
}
