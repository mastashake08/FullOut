import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response  } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
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
  apiUrl = 'https://fullout.jyroneparker.com/api/';
  constructor(public http: Http, public globalVars : GlobalVars,
  public loader : Loader, public alertCtrl: AlertController) {

  }

  get(type, dataToSearch) : Observable<any> {
    let headers = new Headers();
   headers.append('Accept', 'application/json');
   headers.append('Authorization','Bearer '+this.authData.access_token);
   headers.append('Content-Type','application/json');
   console.log(headers);
    if(dataToSearch != null){
    let params = new URLSearchParams();
    if(dataToSearch.name){
    params.set('name', dataToSearch.name); // the user's search value
  }


    let options = new RequestOptions({ headers: headers, search: params });
    console.log(options);
         // ...using get request
         return this.http.get(this.apiUrl + type, options)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error|| 'Server error'));

     }
     else{
     let options = new RequestOptions({ headers: headers});
     // ...using get request
     return this.http.get(this.apiUrl + type, options)
                    // ...and calling .json() on the response to return data
                     .map((res:Response) => res.json())
                     //...errors if any
                     .catch((error:any) => Observable.throw(error|| 'Server error'));

     }
     }

  getDetails(type, params) : Observable<any> {

  let headers = new Headers();
 headers.append('Accept', 'application/json');
 headers.append('Authorization','Bearer '+this.authData.access_token);
 headers.append('Content-Type','application/json');
    let options = new RequestOptions({ headers: headers});
         // ...using get request
         return this.http.get(this.apiUrl + type + '/' + params.id, options)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

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
