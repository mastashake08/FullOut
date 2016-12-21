import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { Login } from '../pages/login/login';
import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { Skills } from '../pages/skill/skill';
import { Schools } from '../pages/school/school';
import { Programs } from '../pages/program/program';
import { Clinics } from '../pages/clinic/clinic';
import { Messages } from '../pages/messages/messages';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public storage : Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home Page', component: Home },
      { title: 'My Profile', component: Profile },
      { title: 'My Skills', component: Skills },
      { title: 'My Schools', component: Schools },
      { title: 'My Programs', component: Programs },
      { title: 'My Clinics and Tryouts', component: Clinics },
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
    this.nav.setRoot(Profile);
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
    this.storage._db.removeItem('isLoggedIn');
    this.nav.setRoot(Login);
  }
}
