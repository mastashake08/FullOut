import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
import { Storage } from '@ionic/storage';
import {AuthService} from '../../providers/auth-service';
import {Register} from '../../pages/register/register';
import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
import { Home } from '../../pages/home/home';

@Component({
  selector: 'page-page1',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class Login {

  constructor(public navCtrl: NavController, public authService : AuthService,
    public storage : Storage, private formBuilder: FormBuilder) {

  }
  registerPage = Register;
  forgotPasswordPage = ForgotPassword;

    login = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
    logForm() {
      this.navCtrl.setRoot(Home);
      this.storage._db.setItem('isLoggedIn', true);
      console.log(this.login, this.storage._db);
      this.authService.authincate('login', this.login.value)
      .then(data => {
      this.storage._db.setItem('isLoggedIn', data);
      this.navCtrl.setRoot(Home);
    });
    }

}
