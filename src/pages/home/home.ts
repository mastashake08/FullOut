import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Details } from '../../pages/details/details';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }
  category = {};

  selected() {
    console.log("selected category", this.category);
    let params = {
      categoryName : this.category
    }
    this.navCtrl.push(Details, params);
  }

}
