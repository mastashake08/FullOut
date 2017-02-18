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
  program = {
    name : 'Cold Play Event',
    date : '26-jan-2017',
    coach : 'dummy text',
    trainingForSkill : 'dummy skill',
    skillRequiredforTrainig : 'dummy skill2',
    fee : '1200',
    favourite : false
  };
  viewName :string = '';
  ionViewDidLoad() {
    console.log('Hello ProgramDetailsPage Page');
    this.viewName = this.navParams.get('title');
  }

  showIntrest(type,params){
    console.log(type, params);
    params.favourite = !params.favourite;
  }

}
