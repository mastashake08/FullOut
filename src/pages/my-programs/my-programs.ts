import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramDetails } from './program-details/program-details';
/*
  Generated class for the Program page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-program',
  templateUrl: 'my-programs.html'
})
export class MyPrograms {

  constructor(public navCtrl: NavController) {
  }

  programs = [
    {name: 'name', coach : 'coach', date : 'date', contactNo : 'contact', favourite: false}
  ]

  ionViewDidLoad() {
    console.log('Hello ProgramPage Page');
  }

  categoryDetails(type,params){
    console.log('program clicked');
    this.navCtrl.push(ProgramDetails,{data : params, title : type});
  }

  showIntrest(type,params){
    console.log(type, params);
    params.favourite = !params.favourite;
  }

}
