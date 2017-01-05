import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { AlertController } from 'ionic-angular';
import {Loader} from '../config/loader';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http, public loader : Loader,
    public alertCtrl: AlertController) {
    console.log('Hello AuthService Provider');
  }
  data = {};
  error : {
    description : string,
    errorCode : string,
  } = {
    description : '',
    errorCode : ''
  };
  apiUrl = 'http://192.241.140.151/api/';
  authincate(type, params){
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.post(this.apiUrl + type, params)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => this.handleError(err)
      )
      //  .catch(this.handleError);
    });
  }

  handleError(err){
    console.log(err);
    this.loader.hide();
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Something went wrong, please try again later',
      buttons: ['OK']
    });
    alert.present();
    // this.error = JSON.parse(err._body);
    // console.log(this.error);
  }

}
