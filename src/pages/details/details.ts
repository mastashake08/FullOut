import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Filter } from '../../pages/filter/filter';
/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class Details {
  viewName = {};
  dataToSearch = '';
  shouldShowCancel = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {

    this.viewName = this.navParams.get('categoryName');
    console.log('Hello DetailsPage Page', this.navParams, this.viewName);
  }
  onInput(event) {
    console.log(event);
  }

  onCancel(event) {
    console.log(event);
  }

  filterModel() {
    console.log("filter model called");
    this.navCtrl.push(Filter);
  }

}
