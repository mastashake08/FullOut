import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import {LoginService} from '../providers/login-service';
import { Skills } from '../pages/skill/skill';
import { Schools } from '../pages/school/school';
import { Programs } from '../pages/program/program';
import { Clinics } from '../pages/clinic/clinic';
import { Messages } from '../pages/messages/messages';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Register,
    Profile,
    Skills,
    Schools,
    Programs,
    Clinics,
    Messages,
    Home
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Register,
    Profile,
    Skills,
    Schools,
    Programs,
    Clinics,
    Messages,
    Home
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
