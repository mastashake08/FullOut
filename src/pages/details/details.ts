import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Filter } from '../../pages/filter/filter';
import { SchoolDetails } from '../../pages/school-detail/school-detail';
import {MasterDataService} from '../../providers/master-data';
/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [MasterDataService]
})
export class Details {
  viewName = {};
  dataToSearch = '';
  shouldShowCancel = false;
  selectedFilters = {}
  placeholder = 'serach by name';
  dropdown = [
    'serach by name',
    'serach by school name',
    'serach by name coach name'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public masterData : MasterDataService) {}

  ionViewDidLoad() {

    this.viewName = this.navParams.get('categoryName');
  }

  schools = this.getData();

  getData(){
      let  schools:Array<any> = [];
      this.masterData.get(this.navParams.get('categoryName'), {})
      .then((data:Array<any>) => {
       this.schools=data;
    });
    return schools;
  }

  onInput(event) {
    console.log(event);
  }

  onCancel(event) {
    console.log(event);
  }

  myCallbackFunction = function(_params) {
   return new Promise((resolve, reject) => {
           resolve();
           this.selectedFilters = _params;
           console.log(this.selectedFilters);
       });
}
  filterModel() {
    console.log("filter model called");

    this.navCtrl.push(Filter, {selectedFilters : this.selectedFilters, callback: this.myCallbackFunction});
  }

goToDetails(option){
  console.log(option);
  this.navCtrl.push(SchoolDetails,{data : option});
}

selected() {
  console.log(this.placeholder, 'jhhhhhh');
  //this.placeholder = 'adsadsd'
}
}
