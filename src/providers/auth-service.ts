import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
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
  apiUrl = 'https://fullout.jyroneparker.com/api/';

  authincate(type, params) : Observable<any> {
    let header = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: header});
         // ...using get request
         return this.http.post(this.apiUrl + type, params, options)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.error || 'Server error'));

     }
  //
  // handleError(err){
  //   console.log(err);
  //   this.loader.hide();
  //   let alert = this.alertCtrl.create({
  //     title: 'Error',
  //     subTitle: 'Something went wrong, please try again later',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  //   // this.error = JSON.parse(err._body);
  //   // console.log(this.error);
  // }

}
