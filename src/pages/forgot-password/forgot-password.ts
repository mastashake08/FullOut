import { Component } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { NavController } from 'ionic-angular';
import {VerifyOTP} from '../../pages/verify-otp/verify-otp';
/*
  Generated class for the ForgotPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPassword {

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {}

  ionViewDidLoad() {
    console.log('Hello ForgotPasswordPage Page');
  }

  forgotPassword = this.formBuilder.group({
    Email: ['', Validators.required]
  });

  FpForm() {
    console.log("hii");
     this.navCtrl.push(VerifyOTP);
  }
}
