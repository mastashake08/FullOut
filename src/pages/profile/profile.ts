import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Album} from './album/album';
import {Notes} from './notes/notes';
import {Bio} from './bio/bio';
import {Accolades} from './accolades/accolades';
import {Vedioes} from './vedioes/vedioes';
import {LookingFor} from './looking-for/looking-for';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
  fullName:string;
  currentGPA:number;
  currentScore:number;
  currentSchool:string;
  address:string;
  mobile:string;
  email:string;
  currentYear:number;
  DOB:string;
  height:string;
  weight:string;
  gender:string;
  constructor(public navCtrl: NavController) {
    this.fullName="Ranu Kumar";
    this.currentGPA=602;
    this.currentScore=850;
    this.currentSchool="Sarvodaya Junior High School";
    this.address="Nai Basti Mauranipur";
    this.mobile="9643979627";
    this.email="ranu.kumar@daffodilsw.com";
    this.currentYear=2016;
    this.DOB="20/06/2016";
    this.height="6";
    this.weight="72";
    this.gender="male";
  }
  lookingForPage=LookingFor;
  albumPage=Album;
  notesPage=Notes;
  bioPage=Bio;
  accoladesPage=Accolades;
  vedioesPage=Vedioes;

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }
}
