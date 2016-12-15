import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Skill page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html'
})
export class Skills {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SkillPage Page');
  }

}
