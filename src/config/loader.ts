import {Injectable} from '@angular/core';
import {LoadingController } from 'ionic-angular';

@Injectable()
export class Loader {

  constructor(public loadingCtrl: LoadingController) {
  }
  loader = this.loadingCtrl.create({
    content: "Please wait...",
  });

  show() {
    this.loader.present();
  }

  hide() {
      this.loader.dismiss();
  }

}
