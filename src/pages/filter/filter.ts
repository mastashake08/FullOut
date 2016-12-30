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
export class Filter {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  @Input() options = [];
  @Output() countChange = new EventEmitter();

  filterData = [
    "GPA Requirement to get in School",
    "GPA Requirement to stay on the team",
    "GPA Requirement For Transfer",
    "ACT Score Requirement",
    "SAT Score Requirement",
    "Other Testing",
    "Number of hours that must be taken every semester to stay on the team",
    "Teams",
    "Schools that provides Scholarship",
    "Tuition cost: this will be a fee range for the following fields"
  ];
//  options = [];
  selectedFilter = null;
  selectedOptions = {};

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
    this.options = [
        {name : 'below 50'},
        {name : 'b/w 50-75'},
        {name : 'above 75'}
      ]
    if(index<5){
      this.options = [
        {name : 'below 50'},
        {name : 'b/w 50-75'},
        {name : 'above 75'}
      ]
    } else if(index===5){
      this.options = []
    } else if(index===6) {
      this.options = [
        {name : '100'},
        {name : '200'},
        {name : '300'},
        {name : '400'},
        {name : '500'}
      ]
    } else if(index === 7){
      this.options = [
        {name : 'All Girl'},
        {name : 'Co-ed'},
        {name : 'Both'}
    ]
    } else if(index === 8){
      this.options = [
        {name : 'Yes'},
        {name : 'No'}
      ]
    } else {
      this.options = [
        {name : 'Out of state'},
        {name : 'In state'},
        {name : 'Average room'},
        {name : 'Board'}
    ]
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
