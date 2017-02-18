import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SkillsIDoNotHave page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skills-i-do-not-have',
  templateUrl: 'skills-i-do-not-have.html'
})
export class SkillsIDoNotHave {
  skillsList = [];
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SkillsIDoNotHavePage Page');
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
  }

}
