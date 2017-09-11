import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MasterDataService} from '../../providers/master-data';
import {Loader} from '../../config/loader';

/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-messages',
  providers: [MasterDataService, Loader],
  templateUrl: 'messages.html'
})
export class Messages {
  messages = {
  sent: {
    data:[]
  },
  received: {
    data: []
  }
  };
  dataReady = false;
  constructor(public navCtrl: NavController, public dataService : MasterDataService, public loader: Loader) {
  this.loader.show();
  this.dataService.get('message',null).subscribe(
                             data => {

                             this.messages=data.messages;
                             this.loader.hide();


                             },
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
  }

  ionViewDidLoad() {
    console.log('Hello MessagesPage Page');
  }

}
