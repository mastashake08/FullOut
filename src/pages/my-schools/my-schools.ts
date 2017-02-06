import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchoolDetails } from './school-detail/school-detail';
import {MasterDataService} from '../../providers/master-data';
import {Loader} from '../../config/loader';

/*
  Generated class for the School page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-school',
  templateUrl: 'my-schools.html',
  providers: [MasterDataService, Loader]
})
export class MySchools {

  schools:Array<Object> = [];

  constructor(public navCtrl: NavController, public masterData : MasterDataService,
    public loader : Loader) {}

  data :Array<any>=[];

  ionViewDidLoad() {
    this.loader.show();
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

  goToDetails(option){
    console.log(option);
    this.navCtrl.push(SchoolDetails,{schoolId : option.id});
  }

  deleteSchool(id) {
    this.schools.splice(id,1);
  }

}
