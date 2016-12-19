import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder} from '@angular/forms';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {}

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

  editProfile = this.formBuilder.group({
    TwitterLink: ['', Validators.required],
    InstaLink: ['', Validators.required],
    FacebookLink: ['', Validators.required],
    Address: ['', Validators.required],
    Height: ['', Validators.required],
    Weight: ['', Validators.required],
    DOB: ['', Validators.required],
    Gender: ['', Validators.required],
    CurrentSchool: ['', Validators.required],
    CurrentYear: ['', Validators.required],
    CurrentGPA: ['', Validators.required],
    HeighestSatOrAct: ['', Validators.required],
    BriefIntro: ['', Validators.required],
    Images: ['', Validators.required],
    AdditionalNotes: ['', Validators.required],
    Bio: ['', Validators.required],
    Accolades: ['', Validators.required],
    VideoLink : ['', Validators.required],
    PushNotification : ['', Validators.required]
  });

  editProfileForm() {
    console.log("hii");
  }

}
