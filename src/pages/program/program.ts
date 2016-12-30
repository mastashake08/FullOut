import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the Program page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-program',
  templateUrl: 'program.html'
})
export class Programs {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello ProgramPage Page');
  }

}
