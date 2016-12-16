import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup  } from '@angular/forms';
import { Storage } from '@ionic/storage';
import {LoginService} from '../../providers/login-service';
import {Register} from '../../pages/register/register';
import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
import { Home } from '../../pages/home/home';

@Component({
  selector: 'page-page1',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class Login {

  constructor(public navCtrl: NavController, public loginService : LoginService,
    public storage : Storage, private formBuilder: FormBuilder) {

  }
  registerPage = Register;
  forgotPasswordPage = ForgotPassword;

    login = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });

    logForm() {
      console.log(this.login, this.storage._db);
      this.storage._db.setItem('isLoggedIn', true);
      this.navCtrl.setRoot(Home);
      this.loginService.login(this.login.value);
      // .then(data => {
      // console.log("Hii", data);
    // });
    }

}
