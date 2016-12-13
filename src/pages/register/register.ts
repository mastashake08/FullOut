import { Component } from '@angular/core';
import { Profile } from '../../pages/profile/profile';
import { NavController, NavParams } from 'ionic-angular';
import {LoginService} from '../../providers/login-service';

@Component({
  selector: 'page-page2',
  templateUrl: 'register.html',
  providers: [LoginService]
})
export class Register {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService : LoginService) {
    // If we navigated to this page, we will have an item available as a nav param
  }
  register = {};

  registerUser(register) {
    if(register.Passowrd != register.ConfirmPassowrd){
      return;
    }
    this.loginService.register(register)
  .then(data => {
    console.log("Hii", data);
  });
  this.navCtrl.setRoot(Profile);
  }

}
