//import {IonicApp} from 'ionic/ionic';
import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController} from 'ionic-angular';
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
    public loadingCtrl: LoadingController, public globalVars : GlobalVars,
    public menu : MenuController) {
    console.log(this.storage._db.getItem('isLoggedIn'));
    if(this.storage._db.getItem('isLoggedIn') == true){
    this.navCtrl.setRoot(Home);
    }
    this.menu.enable(false);
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
    this.authService.authincate('login', this.login.value).subscribe(
                               data => {
                               console.log(data);
                                 this.globalVars.setData(data);
                                 this.storage._db.setItem('isLoggedIn', data);
                                 this.menu.enable(true);
                                 this.navCtrl.setRoot(Home);
                               },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    onPageWillLeave() {
    this.menu.enable(true);
  }

}
