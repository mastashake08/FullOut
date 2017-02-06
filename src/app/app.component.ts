import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { Login } from '../pages/login/login';
import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { MySkills } from '../pages/my-skills/my-skills';
import { MySchools } from '../pages/my-schools/my-schools';
import { MyPrograms } from '../pages/my-programs/my-programs';
import { MyClinics } from '../pages/my-clinics/my-clinics';
import { Messages } from '../pages/messages/messages';
import {GlobalVars} from '../config/config';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public storage : Storage,
  public globalVars : GlobalVars, public menu : MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home Page', component: Home },
      { title: 'My Profile', component: Profile },
      { title: 'My Skills', component: MySkills },
      { title: 'My Schools', component: MySchools },
      { title: 'My Programs', component: MyPrograms },
      { title: 'My Clinics and Tryouts', component: MyClinics },
      { title: 'Messages', component: Messages }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      //get the value from storage
this.storage._db.getItem('isLoggedIn').then((value) => {
  if(value) {
    this.globalVars.setData(value);
    //this.nav.setRoot(Home);
  }
})
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    console.log("logout called");
    this.menu.close();
    this.storage._db.removeItem('isLoggedIn');
    this.nav.setRoot(Login);
  }
}
