import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { FilterCategory } from './filter/filter';
import { SchoolDetails } from '../../../pages/my-schools/school-detail/school-detail';
import {MasterDataService} from '../../../providers/master-data';
import {Loader} from '../../../config/loader';

/*
  Generated class for the CategorySearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-search',
  templateUrl: 'category-search.html',
  providers: [MasterDataService, Loader]
})
export class CategorySearch {

  viewName : string = '';
  dataToSearch = '';
  shouldShowCancel = false;
  selectedFilters = {}
  placeholder = 'serach by name';
  dropdown = [
    'serach by name',
    'serach by school name',
    'serach by coach name'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public masterData : MasterDataService, public loader : Loader) {}
  schools:Array<Object> = [];

  ionViewDidLoad() {
    this.loader.show();
    this.viewName = this.navParams.get('categoryName');
    let name : string = '';
    this.getData(name);
  }

  getData(dataToSearch){
    this.masterData.get('school', {name : dataToSearch}).subscribe(
                               data => {
                                 this.schools=data.data;
                                 this.loader.hide();
                               },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

  onInput(event) {
    console.log(event, this.dataToSearch);
    this.getData(this.dataToSearch);
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

    this.navCtrl.push(FilterCategory, {selectedFilters : this.selectedFilters, callback: this.myCallbackFunction});
  }

goToDetails(option){
  console.log(option);
  this.navCtrl.push(SchoolDetails,{schoolId : option.id});
}

selected() {
  console.log(this.placeholder, 'jhhhhhh');
  //this.placeholder = 'adsadsd'
}

}
