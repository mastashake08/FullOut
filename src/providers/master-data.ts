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
export class MasterDataService {

  constructor(public http: Http) {
  }
  data = [];
  error : {
    description : string,
    errorCode : string,
  } = {
    description : '',
    errorCode : ''
  };
  apiUrl = 'http://192.241.140.151/api/';
  get(type, params){
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.post(this.apiUrl + type, params)
        .map(res => res.json())
        .subscribe(data => {
          this.data = this.getData(type);
          resolve(this.data);
        }, err => {
          //this.handleError(err);

          resolve(this.getData(type));
        }
      )
      //  .catch(this.handleError);
    });
  }

  handleError(err){
    this.error = JSON.parse(err._body);
    Dialogs.alert(this.error.description, this.error.errorCode, "OK");
  }

  getData(type){
    let data :Array<any>=[];
    for(let i=0;i<10;i++){
      var obj = {
        name: type+i,
        coachname : 'coach' + i,
        contactno : 'contact' + i
      }
      data.push(obj)
    }
    return data;
  }

}
