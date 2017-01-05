import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AllSkills page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-all-skills',
  templateUrl: 'all-skills.html'
})
export class AllSkills {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  skillsList = [];
  ionViewDidLoad() {
    console.log('Hello AllSkillsPage Page');
    for(let i=0;i<30;i++){
      let iconObj = {
        icon : "square-outline",
        name : "skill" + i,
        isChecked : false
      }
      this.skillsList.push(iconObj);
    }
  }

  selectSkill(skill) {
    skill.isChecked = !skill.isChecked;
    if(skill.isChecked) {
      skill.icon = "checkbox-outline";
    } else {
      skill.icon = "square-outline";
    }
    console.log(this.skillsList)
  }

}
