import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Album} from './album/album';
import {Notes} from './notes/notes';
import {Bio} from './bio/bio';
import {Accolades} from './accolades/accolades';
import {Vedioes} from './vedioes/vedioes';
import {LookingFor} from './looking-for/looking-for';
import { EditProfile } from './edit-profile/edit-profile';
import {MasterDataService} from '../../providers/master-data';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [MasterDataService]
})
export class Profile {


  profile = {
    name : 'Renu Sharma',
    currentGPA : '773',
    currentScore : '850',
    currentSchool : "School 1",
    address : 'Sector 31, Gurugram',
    mobile : '+919643979627',
    email : 'renu.sharma@daffodilsw.com',
    currentYear : '2016',
    DOB : '2016-12-17',
    height : '5.6',
    weight : '51',
    gender : 'female',
    notification : true,
    disable : false
  }
  lookingForPage=LookingFor;
  albumPage=Album;
  notesPage=Notes;
  bioPage=Bio;
  accoladesPage=Accolades;
  vedioesPage=Vedioes;
  constructor(public navCtrl: NavController, public dataService : MasterDataService) {
  this.dataService.get('user',null).subscribe(
                             data => {
                             console.log(data);
                             this.profile.name=data.name

                             },
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
}

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');

  }
  editProfile(){
    this.navCtrl.push(EditProfile, {profile : this.profile});
  }
}
