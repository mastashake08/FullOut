import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import {NewPassword} from '../../pages/new-password/new-password';

/*
  Generated class for the VerifyOTP page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-verify-otp',
  templateUrl: 'verify-otp.html'
})
export class VerifyOTP {

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {}

  verifyOtp = this.formBuilder.group({
    Otp: ['', Validators.required]
  });

  submitOtp() {
    console.log("hii");
     this.navCtrl.push(NewPassword);
  }

}
