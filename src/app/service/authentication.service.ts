import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router) { }

  public loginEmailAndPassword(usuarioModel: any) {
    this.angularFireAuth.signInWithEmailAndPassword(usuarioModel.email, usuarioModel.senha).then( ()=> {
      localStorage.setItem("TOKEN", "true");
      this.router.navigate(["page-dashboard"]);
    }, error => {
      console.error("Erro ao tentar realizar o login do usuário!");
      this.router.navigate(["page-login"]);
    });
  }

  public createEmailAndPassword(usuarioModel: any) {
    this.angularFireAuth.createUserWithEmailAndPassword(usuarioModel.email, usuarioModel.senha).then( ()=> {
      this.router.navigate(["page-login"]);
    }, error => {
      console.error(error.message);
      this.router.navigate(["page-sigin"]);
    });
  }

  public signOut(usuarioModel: any) {
    this.angularFireAuth.signOut().then( ()=> {
      localStorage.removeItem("TOKEN");
      this.router.navigate(["page-login"]);
    }, error => {
      console.error(error.message);
    });
  }

}
