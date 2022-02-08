import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  public isUsuarioLogado: boolean = false;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  public loginEmailAndPassword(usuarioModel: any) {
    this.apresentarLoading();
    setTimeout(() => {
      this.angularFireAuth
        .signInWithEmailAndPassword(usuarioModel.email, usuarioModel.senha)
        .then(
          () => {
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

  public signOut() {
    this.angularFireAuth.signOut().then(
      () => {
        localStorage.removeItem('TOKEN');
        this.isUsuarioLogado = false;
      },
      (error) => {
        console.error(error.message);
      }
    );
  }

  public findToken() {
    for (var key in localStorage) {
      if(key == "TOKEN") {
        console.log('CHAVE: ', key);
        this.isUsuarioLogado = true;
      }
    }
  }

  public usuarioLogado() {
    console.log("Usuario Logado.... ", this.isUsuarioLogado);
    return this.isUsuarioLogado;
  }

  private async apresentarLoading() {
    const loading = await this.loadingController.create({
      message: 'Validando Dados...',
    });
    return await loading.present();
  }

}
