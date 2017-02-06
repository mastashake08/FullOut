import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { EditProfile } from '../pages/profile/edit-profile/edit-profile';
import { MySkills } from '../pages/my-skills/my-skills';
import { MySchools } from '../pages/my-schools/my-schools';
import { MyPrograms } from '../pages/my-programs/my-programs';
import { MyClinics } from '../pages/my-clinics/my-clinics';
import { Messages } from '../pages/messages/messages';
import {VerifyOTP} from '../pages/forgot-password/verify-otp/verify-otp';
import {NewPassword} from '../pages/forgot-password/new-password/new-password';
import {SchoolSearch} from '../pages/home/school-search/school-search';
import {Filter} from '../pages/home/school-search/filter/filter';
import {FilterCategory} from '../pages/home/category-search/filter/filter';
import {Album} from '../pages/profile/album/album';
import {Accolades} from '../pages/profile/accolades/accolades';
import {Bio} from '../pages/profile/bio/bio';
import {LookingFor} from '../pages/profile/looking-for/looking-for';
import {Notes} from '../pages/profile/notes/notes';
import {Vedioes} from '../pages/profile/vedioes/vedioes';
import { SchoolDetails } from '../pages/my-schools/school-detail/school-detail';
import { ProgramDetails } from '../pages/my-programs/program-details/program-details';
import { AllSkills } from '../pages/my-skills/all-skills/all-skills';
import { SkillsIHave } from '../pages/my-skills/skills-i-have/skills-i-have';
import { SkillsIDoNotHave } from '../pages/my-skills/skills-i-do-not-have/skills-i-do-not-have';
import { Clinics } from '../pages/my-clinics/clinics/clinics';
import { Tryouts } from '../pages/my-clinics/tryouts/tryouts';
import { CategorySearch } from '../pages/home/category-search/category-search';
import {GlobalVars} from '../config/config';
import {Loader} from '../config/loader';

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
    MySkills,
    MyPrograms,
    MySchools,
    MyClinics,
    Messages,
    Home,
    VerifyOTP,
    SchoolSearch,
    Filter,
    Album,
    Accolades,
    Bio,
    LookingFor,
    Notes,
    Vedioes,
    SchoolDetails,
    ProgramDetails,
    AllSkills,
    SkillsIHave,
    SkillsIDoNotHave,
    Clinics,
    Tryouts,
    CategorySearch,
    FilterCategory
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
    MySkills,
    MySchools,
    MyPrograms,
    MyClinics,
    Messages,
    Home,
    VerifyOTP,
    SchoolSearch,
    Filter,
    Album,
    Accolades,
    Bio,
    LookingFor,
    Notes,
    Vedioes,
    SchoolDetails,
    ProgramDetails,
    AllSkills,
    SkillsIHave,
    SkillsIDoNotHave,
    Clinics,
    Tryouts,
    CategorySearch,
    FilterCategory
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage,
  GlobalVars, Loader]
})
export class AppModule {}
