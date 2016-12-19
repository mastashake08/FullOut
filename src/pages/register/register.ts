import { Component } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Profile } from '../../pages/profile/profile';
import { NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../../providers/auth-service';

@Component({
  selector: 'page-page2',
  templateUrl: 'register.html',
  providers: [AuthService]
})
export class Register {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService : AuthService, private formBuilder: FormBuilder,
    public storage : Storage) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  register = this.formBuilder.group({
    Fullname: ['', Validators.required],
    Mobile: ['', Validators.required],
    Email:['', Validators.required],
    Address:['', Validators.required],
    Passowrd:['', Validators.required],
    ConfirmPassowrd:['', Validators.required]
  });

  registerUser() {
    this.validate()
    // if(register.Passowrd != register.ConfirmPassowrd){
    //   return;
    // }
    this.authService.authincate('register', this.register.value)
  .then(data => {
    this.storage._db.setItem('isLoggedIn', data);
    this.navCtrl.setRoot(Profile);
  });
  }

  validate() {
    // if(this.register.Passowrd != this.register.ConfirmPassowrd){
    //   return 'Passward and confirm password mismatch';
    // }
  }

}
