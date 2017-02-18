import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {Login} from '../../../pages/login/login';
/*
  Generated class for the NewPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-password',
  templateUrl: 'new-password.html'
})
export class NewPassword {

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {}

  ionViewDidLoad() {
    console.log('Hello NewPasswordPage Page');
  }

  newPassword = this.formBuilder.group({
    Password: ['', Validators.required],
    ConfirmPassowrd: ['', Validators.required]
  });

  NpForm() {
    console.log("hii");
     this.navCtrl.setRoot(Login);
  }

}
