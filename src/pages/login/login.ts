import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoginService} from '../../providers/login-service';
import {Register} from '../../pages/register/register';
import { Home } from '../../pages/home/home';

@Component({
  selector: 'page-page1',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class Login {

  constructor(public navCtrl: NavController, public loginService : LoginService, public storage : Storage) {

  }
  registerPage = Register;
  login = {}
  logForm() {
    console.log(this.login, this.storage);
    this.storage.set('isLoggedIn', true)
    this.navCtrl.setRoot(Home);
    this.loginService.login(this.login)
  .then(data => {
    console.log("Hii", data);
  });
  }

}
