import { Component } from '@angular/core';
import { ModalController, NavController, ViewController } from 'ionic-angular';
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
  message = '';
  dataReady = false;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService : MasterDataService, public loader: Loader) {
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
  reply(id) {
  let replyModal = this.modalCtrl.create(Reply, { id: id });
  replyModal.present();
  }
  ionViewDidLoad() {
    console.log('Hello MessagesPage Page');
  }

}

@Component({
templateUrl: 'message-modal/message-modal.html'
})
class Reply {

 constructor(public viewCtrl: ViewController) {

 }

 dismiss() {
   let data = { 'id': '0' };
   this.viewCtrl.dismiss(data);
 }

}
