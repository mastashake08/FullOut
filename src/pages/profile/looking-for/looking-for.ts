import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LookingFor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-looking-for',
  templateUrl: 'looking-for.html'
})
export class LookingFor {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LookingForPage Page');
  }

}
