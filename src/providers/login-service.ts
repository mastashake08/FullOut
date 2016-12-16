import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Home } from '../../pages/home/home';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';

/*
  Generated class for the LoginService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginService {

  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }
  data = {};
  login(params){
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.post('http://192.241.140.151/api/login', params)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
      //  .catch(this.handleError);
    });
  }

  register(params) {
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.post('http://192.241.140.151/api/register', params)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
      //  .catch(this.handleError);
    });
  }

  handleError(error) {
    console.log(error);
  }

}
