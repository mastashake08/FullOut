import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { Clinics } from './clinics/clinics';
import { Tryouts } from './tryouts/tryouts';

/*
  Generated class for the Clinic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clinic',
  templateUrl: 'my-clinics.html'
})
export class MyClinics {

  @ViewChild('myTabs') tabRef: Tabs;
  clinics = Clinics;
  tryouts = Tryouts;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ClinicPage Page');
  }

}
