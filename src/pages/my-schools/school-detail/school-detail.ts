import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
import {UpdateDataService} from '../../../providers/update-data-service';
import { ProgramDetails } from '../../../pages/my-programs/program-details/program-details';
import {MasterDataService} from '../../../providers/master-data';
import {Loader} from '../../../config/loader';
/*
  Generated class for the SchoolDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-school-detail',
  templateUrl: 'school-detail.html',
  providers: [UpdateDataService, MasterDataService, Loader]
})
export class SchoolDetails {

  constructor(public navCtrl: NavController,public navParams: NavParams,
  public updateData : UpdateDataService, public masterData : MasterDataService,
  public loader : Loader) {

  }
  listRequirements : boolean  = false;
  listPrograms : boolean = false;
  listClinics  : boolean = false;
  listTryouts : boolean = false;
  listTeams : boolean = false;
  school : any = {};

  ionViewDidLoad() {
    this.loader.show();
    let schoolId = this.navParams.get('schoolId');
    this.schoolDetails(schoolId);
  }

  schoolDetails(id) {
  //   this.masterData.getDetails('school', {id : id})
  //   .then((data:any) => {
  //    this.school=data.data;
  //    this.school.favourite = false;
  //    this.loader.hide();
  // });

  this.masterData.getDetails('school', {id : id}).subscribe(
                             data => {
                               this.school=data.data;
                               this.school.favourite = false;
                               this.loader.hide();
                             },
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
  }

  markAsFavourite() {
    console.log("mark as favourite api call");
    this.updateData.markfav('school', {})
    .then((data) => {
     console.log("marked successfully");
  });
  }

  categoryDetails(type,params){
    console.log('program clicked');
    this.navCtrl.push(ProgramDetails,{data : params, title : type});
  }

  showIntrest(type,params){
    console.log(type, params);
    params.favourite = !params.favourite;
  }

  openBrowser(url){
    let browser = new InAppBrowser(url, '_self');
    //browser.show();
  }

}
