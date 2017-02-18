import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SkillsIHave page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skills-i-have',
  templateUrl: 'skills-i-have.html'
})
export class SkillsIHave {
  skillsList = [];
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SkillsIHavePage Page');
    for(let i=0;i<30;i++){
      let iconObj = {
        icon : "checkbox-outline",
        name : "skill" + i,
        isChecked : true
      }
      this.skillsList.push(iconObj);
    }
  }

  deleteSkill(id) {
    this.skillsList.splice(id,1);
  }

}
