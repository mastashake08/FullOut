import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController) {

  }
  login = {}
  logForm() {
    console.log(this.login)
  }

}
