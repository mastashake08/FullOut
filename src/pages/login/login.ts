import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import { Storage } from '@ionic/storage';
import {AuthService} from '../../providers/auth-service';
import {Register} from '../../pages/register/register';
import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
import { Home } from '../../pages/home/home';
import {GlobalVars} from '../../config/config';

@Component({
  selector: 'page-page1',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class Login {

  constructor(public navCtrl: NavController, public authService : AuthService,
    public storage : Storage, private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController, public globalVars : GlobalVars) {

  }
  registerPage = Register;
  forgotPasswordPage = ForgotPassword;

    login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });

    logForm() {
      // this.loader.present();
      // this.navCtrl.setRoot(Home);
      // this.storage._db.setItem('isLoggedIn', true);
      // console.log(this.login, this.storage._db);
      this.authService.authincate('login', this.login.value)
      .then((data : Object) => {
      this.globalVars.setData(data);
      this.storage._db.setItem('isLoggedIn', data);
      this.navCtrl.setRoot(Home);
    });
    }

}
