import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchoolSearch } from './school-search/school-search';
import { CategorySearch } from './category-search/category-search';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }
  category = {};
  categories = [
    {name : 'school', title : 'School search'},
    {name : 'program', title : 'Program search'},
    {name : 'clinic', title : 'Clinic search'},
    {name : 'tryouts', title : 'Try Outs search'},
    {name : 'offers', title : 'Offers and Scholarships search'},
    {name : 'team', title : 'Team search'}
  ]

  selected() {
    let params = {
      categoryName : this.category
    }
    if(this.category == "School search"){
      this.navCtrl.push(SchoolSearch, params);
    } else {
      this.navCtrl.push(CategorySearch, params);
    }

  }

}
