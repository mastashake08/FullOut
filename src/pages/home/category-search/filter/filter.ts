import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Filter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterCategory {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  @Input() options = [];
  @Output() countChange = new EventEmitter();

  filterData = [
    "Skills",
    'Free range of program'
  ];
//  options = [];
  selectedFilter = null;
  selectedOptions = {};
  showfreeRange : Boolean = false;

  selectOption = {};
  ionViewDidLoad() {
    console.log('Hello FilterPage Page');
    if(this.navParams.get("selectedFilters")) {
      this.selectedOptions =this.navParams.get("selectedFilters");
    }
  }

  showOptions(index) {
    this.selectedFilter = index;
    console.log(index);
    // this.selectOption = 'below 50';
      if(index == 1) {
          this.options = [];
          this.showfreeRange = true;
          console.log("we need to create a free range here");
      } else {
        this.showfreeRange = false;
        this.options = [
          {name : 'Skill1'},
          {name : 'Skill2'},
          {name : 'Skill3'},
          {name : 'Skill4'},
          {name : 'Skill5'},
          {name : 'Skill6'},
        ];
      }


  if(this.selectedOptions[index]) {
   for(let i=0;i<this.options.length;i++){
     if(this.options[i].name == this.selectedOptions[index]){
      this.selectOption = this.options[i].name;
     }
   }
  }
  this.countChange.emit(this.options);
  }

  selected(value){
    console.log("selected", value, this.selectedFilter, this.selectOption);
    this.selectedOptions[this.selectedFilter] = this.selectOption;
  }

 callback = this.navParams.get("callback");

  applyFilters(){
    console.log(this.selectedOptions);


 this.callback(this.selectedOptions).then(()=>{
    this.navCtrl.pop();
 });
    //this.navCtrl.pop(this.selectedOptions);
  }
}
