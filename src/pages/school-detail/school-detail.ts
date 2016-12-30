import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {UpdateDataService} from '../../providers/update-data-service';
import { ProgramDetails } from '../../pages/program-details/program-details';
/*
  Generated class for the SchoolDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-school-detail',
  templateUrl: 'school-detail.html',
  providers: [UpdateDataService]
})
export class SchoolDetails {

  constructor(public navCtrl: NavController,public params: NavParams,
  public updateData : UpdateDataService) {

  }
  listRequirements = false;
  listPrograms = false;
  listClinics = false;
  listTryouts = false;
  listTeams = false;
  school= {
  //  pic:"src/assets/school1.jpg",
    name:"DPS School",
    officeNo:"0124-234567",
    cellNo:"9651062699",
    description:"This is Sarvodaya Junior High School since 1985.",
    favourite : false,
    coaches:[
      {title:"sarvodaya_game1",name:"sarvodaya_coach1"},
      {title:"sarvodaya_game2",name:"sarvodaya_coach2"},
      {title:"sarvodaya_game3",name:"sarvodaya_coach3"}
    ],
     websiteLink : 'www.google.com',
     address : 'Sample address',
     tutionFee:{inState:"2000",outOfState:"5000"
  },
  requirements : [
    {lable : 'GPA Requirement to get in the school', value : 'val1'},
    {lable : 'GPA Requirement to stay on the team', value : 'val2'},
    {lable : 'GPA Requirements for Transfers', value : 'val3'},
    {lable : 'ACT Score Requirement', value : 'val4'},
    {lable : 'SAT Score Requirement', value : 'val5'},
    {lable : 'Other Testing', value : 'val6'},
    {lable : 'Number of hours that must be taken every semester to stay on the team', value : 'val7'},
  ],
  programs : [
    {name : 'program1', coach : 'coach1', date : 'date1', contactNo : 'contact1', favourite : false},
    {name : 'program2', coach : 'coach2', date : 'date2', contactNo : 'contact2', favourite : false},
    {name : 'program3', coach : 'coach3', date : 'date3', contactNo : 'contact3', favourite : false}
  ],
  clinics : [
    {name : 'clinic1', coach : 'coach1', date : 'date1', skills : 'skill1', favourite : false},
    {name : 'clinic2', coach : 'coach2', date : 'date2', skills : 'skill2', favourite : false},
    {name : 'clinic3', coach : 'coach3', date : 'date3', skills : 'skill3', favourite : false}
  ],
  tryouts : [
    {name : 'tryout1', coach : 'coach1', date : 'date1', skills : 'skill1', favourite : false},
    {name : 'tryout2', coach : 'coach2', date : 'date2', skills : 'skill2', favourite : false},
    {name : 'tryout3', coach : 'coach3', date : 'date3', skills : 'skill3', favourite : false}
  ],
  teams : [
    {name : 'team1', coach : 'coach1', mascot : 'mascot', colorCode : 'skill1', description : 'descrition', teamType : 'type1'},
    {name : 'team2', coach : 'coach2', mascot : 'mascot', colorCode : 'skill1', description : 'descrition', teamType : 'type1'},
    {name : 'team3', coach : 'coach3', mascot : 'mascot', colorCode : 'skill1', description : 'descrition', teamType : 'type1'},
  ]
};

  ionViewDidLoad() {
    console.log('Hello SchoolDetailPage Page');
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

}
