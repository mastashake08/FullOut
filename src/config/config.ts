import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVars {
  myGlobalVar : Object = {};

  constructor() {
  }

  setData(value) {
    this.myGlobalVar = value;
  }

  getData() {
    return this.myGlobalVar;
  }

}
