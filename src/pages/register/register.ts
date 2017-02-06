import { Component } from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { EditProfile } from '../../pages/profile/edit-profile/edit-profile';
import { NavController, NavParams, MenuController } from 'ionic-angular';
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
    public storage : Storage, public menu : MenuController) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  register = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email:['', Validators.required],
    address:['', Validators.required],
    password:['', Validators.required],
    confirmpassowrd:['', Validators.required]
  });

  registerUser() {
    this.authService.authincate('register', this.register.value).subscribe(
                               data => {
                                 this.storage._db.setItem('isLoggedIn', data);
                                 this.menu.enable(true);
                                 this.navCtrl.setRoot(EditProfile);
                               },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

  validate() {
    // if(this.register.Passowrd != this.register.ConfirmPassowrd){
    //   return 'Passward and confirm password mismatch';
    // }
  }

}
