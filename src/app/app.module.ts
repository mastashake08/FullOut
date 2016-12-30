import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { EditProfile } from '../pages/edit-profile/edit-profile';
import { Skills } from '../pages/skill/skill';
import { Schools } from '../pages/school/school';
import { Programs } from '../pages/program/program';
import { Clinics } from '../pages/clinic/clinic';
import { Messages } from '../pages/messages/messages';
import {VerifyOTP} from '../pages/verify-otp/verify-otp';
import {NewPassword} from '../pages/new-password/new-password';
import {Details} from '../pages/details/details';
import {Filter} from '../pages/filter/filter';
import {Album} from '../pages/profile/album/album';
import {Accolades} from '../pages/profile/accolades/accolades';
import {Bio} from '../pages/profile/bio/bio';
import {LookingFor} from '../pages/profile/looking-for/looking-for';
import {Notes} from '../pages/profile/notes/notes';
import {Vedioes} from '../pages/profile/vedioes/vedioes';
import { SchoolDetails } from '../pages/school-detail/school-detail';
import { ProgramDetails } from '../pages/program-details/program-details';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Register,
    ForgotPassword,
    VerifyOTP,
    NewPassword,
    Profile,
    EditProfile,
    Skills,
    Schools,
    Programs,
    Clinics,
    Messages,
    Home,
    VerifyOTP,
    Details,
    Filter,
    Album,
    Accolades,
    Bio,
    LookingFor,
    Notes,
    Vedioes,
    SchoolDetails,
    ProgramDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Register,
    ForgotPassword,
    VerifyOTP,
    NewPassword,
    Profile,
    EditProfile,
    Skills,
    Schools,
    Programs,
    Clinics,
    Messages,
    Home,
    VerifyOTP,
    Details,
    Filter,
    Album,
    Accolades,
    Bio,
    LookingFor,
    Notes,
    Vedioes,
    SchoolDetails,
    ProgramDetails
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
