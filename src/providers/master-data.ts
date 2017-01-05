import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Dialogs } from 'ionic-native';
import {GlobalVars} from '../config/config';
import {Loader} from '../config/loader';

@Injectable()
export class MasterDataService {
  data = [];
  error : {
    description : string,
    errorCode : string,
  } = {
    description : '',
    errorCode : ''
  };
  authData : any = this.globalVars.getData();
  apiUrl = 'http://192.241.140.151/api/';
  constructor(public http: Http, public globalVars : GlobalVars,
  public loader : Loader, public alertCtrl: AlertController) {

  }

  get(type, dataToserach){
    let params = new URLSearchParams();
    if(dataToserach.name){
    params.set('name', dataToserach.name); // the user's search value
  }

    let access_token = new Headers({ 'access_token': this.authData.access_token });
    let options = new RequestOptions({ headers: access_token, search: params });
    return new Promise(resolve => {
      this.http.get(this.apiUrl + type, options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => this.handleError(err))
    });
  }

  getDetails(type, params){

    let access_token = new Headers({ 'access_token': this.authData.access_token });
    let options = new RequestOptions({ headers: access_token});
    return new Promise(resolve => {
      this.http.get(this.apiUrl + type + '/' + params.id, options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => this.handleError(err))
    });
  }

  handleError(err){
    this.loader.hide();
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Something went wrong, please try again later',
      buttons: ['OK']
    });
    alert.present();
    // this.error = JSON.parse(err._body);
    // Dialogs.alert(this.error.description, this.error.errorCode, "OK");
  }

}
