import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Clinics page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clinics',
  templateUrl: 'clinics.html'
})
export class Clinics {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ClinicsPage Page');
  }

}
