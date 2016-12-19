import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Dialogs } from 'ionic-native';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http) {
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
          this.data = data.auth.token;
          resolve(this.data);
        }, err => this.handleError(err)
      )
      //  .catch(this.handleError);
    });
  }

  handleError(err){
    console.log(err);
    this.error = JSON.parse(err._body);
    console.log(this.error);
    Dialogs.alert(this.error.description, this.error.errorCode, "OK");
  }

}
