import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ProgramDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-program-details',
  templateUrl: 'program-details.html'
})
export class ProgramDetails {

  constructor(public navCtrl: NavController, public navParams: NavParams,) {}
  viewName = '';
  ionViewDidLoad() {
    console.log('Hello ProgramDetailsPage Page');
    this.viewName = this.navParams.get('title');
  }

}
