import { Component } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loginService : LoginService, private formBuilder: FormBuilder) {
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
    // if(register.Passowrd != register.ConfirmPassowrd){
    //   return;
    // }
    this.loginService.login('register', this.register.value)
  .then(data => {
    console.log("Hii", data);
  });
  this.navCtrl.setRoot(Profile);
  }

}
