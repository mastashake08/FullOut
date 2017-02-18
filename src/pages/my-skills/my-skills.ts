import { Component, ViewChild } from '@angular/core';
import { NavController , Tabs} from 'ionic-angular';
import { AllSkills } from './all-skills/all-skills';
import { SkillsIHave } from './skills-i-have/skills-i-have';
import { SkillsIDoNotHave } from './skills-i-do-not-have/skills-i-do-not-have';
/*
  Generated class for the Skill page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skill',
  templateUrl: 'my-skills.html'
})
export class MySkills {
  @ViewChild('myTabs') tabRef: Tabs;
  accolades = AllSkills;
  vedioes = SkillsIHave;
  lookingfor = SkillsIDoNotHave;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SkillPage Page');
  }

}
