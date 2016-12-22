import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Filter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class Filter {

  constructor(public navCtrl: NavController) {}

  filterData = [
    "GPA Requirement to get in School",
    "GPA Requirement to stay on the team",
    "GPA Requirement For Transfer",
    "ACT Score Requirement",
    "SAT Score Requirement",
    "Other Testing",
    "Number of hours that must be taken every semester to stay on the team",
    "Teams",
    "Schools that provides Scholarship",
    "Tuition cost: this will be a fee range for the following fields"
  ]
  ionViewDidLoad() {
    console.log('Hello FilterPage Page');
  }

}
