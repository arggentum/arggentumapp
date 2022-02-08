import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-page-welcome',
  templateUrl: './page-welcome.page.html',
  styleUrls: ['./page-welcome.page.scss'],
})
export class PageWelcomePage implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    console.log("Encerrando Login do Usuário....");
    this.encessarSessaoUsuario();
  }

  public encessarSessaoUsuario() {
    this.authenticationService.signOut();
  }

}
