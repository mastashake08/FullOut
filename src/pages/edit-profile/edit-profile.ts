import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, Dialogs } from 'ionic-native';
import {Validators, FormBuilder} from '@angular/forms';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfile {

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {}

  ionViewDidLoad() {

  }

  @Input() images = [];
  @Output() countChange = new EventEmitter();

  @Input() accoladesArray = [];
  @Output() accoladesChange = new EventEmitter();

  accolades : {
    title : string, year : number
  } = { title : '', year : 0}


  editProfile = this.formBuilder.group({
    TwitterLink: ['', Validators.required],
    InstaLink: ['', Validators.required],
    FacebookLink: ['', Validators.required],
    Address: ['', Validators.required],
    Height: ['', Validators.required],
    Weight: ['', Validators.required],
    DOB: ['', Validators.required],
    Gender: ['male', Validators.required],
    CurrentSchool: ['', Validators.required],
    CurrentYear: ['', Validators.required],
    CurrentGPA: ['', Validators.required],
    HeighestSatOrAct: ['', Validators.required],
    BriefIntro: ['', Validators.required],
    Images: [this.images, Validators.required],
    AdditionalNotes: ['', Validators.required],
    Bio: ['', Validators.required],
    AccoladesTitle: ['', Validators.required],
    AccoladesYear: ['', Validators.required],
    VideoLink : ['', Validators.required],
    PushNotification : ['', Validators.required]
  });


  editProfileForm() {
    if(!this.images.length) {
      Dialogs.alert('Add at least one image', 'Invalid data', "OK");
    } else if(!this.accoladesArray.length) {
      Dialogs.alert('Add at least one accolade', 'Invalid data', "OK");
    } else {
      //Call api to store the values over server
    }
  }
  cameraClick() {
  if(this.images.length < 9) {
    this.addImage();
  } else {
      Dialogs.alert('Maximum 9 images are allowed', 'Max limit reached', "OK");
  }

  }

  getOptions(index) {
    let options = {
      destinationType: null,
      sourceType: null,
    };
    if(index == 1) {
      options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      }
    } else {
      options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
      }
    }
    return options;
  }

  addImage() {
    Dialogs.confirm('Select option', 'Add Picture', ['Gallery', 'Camera']).then(data => {
      var options = this.getOptions(data);
      Camera.getPicture(options).then((imageData) => {
      this.displayImages(imageData);
      }, (err) => {
     // Handle error
    });
    });
  }

  displayImages(imagePath) {
    var isDuplicate = this.isDuplicate(imagePath);
    if(isDuplicate) {
        Dialogs.alert('Duplicate images are not allowed', 'Duplicacy', "OK");
    } else {
      let image = {src : imagePath};
      this.images.push(image);
      this.countChange.emit(this.images);
    }
  }

  isDuplicate(imagePath) {
    let isdup = false;
    for(let i=0;i<this.images.length;i++) {
      if(imagePath.split("?")[0] == this.images[i].src.split("?")[0]){
        isdup =  true;
      } else {
        //do nothing
      }
    }
    return isdup;
  }

  deleteImage(index){
    this.images.splice(index, 1);
    this.countChange.emit(this.images);
  }

  addAccolade() {
    if(this.editProfile.value.AccoladesTitle && this.editProfile.value.AccoladesYear) {
      let accolade = {
        title : this.editProfile.value.AccoladesTitle,
        year : this.editProfile.value.AccoladesYear
      }
      this.accoladesArray.push(accolade);
      this.accoladesChange.emit(this.accoladesArray);
      this.editProfile.value.AccoladesTitle = '';
      this.editProfile.value.AccoladesYear = null;
    } else {
      Dialogs.alert('Duplicate images are not allowed', 'Duplicacy', "OK");
    }
  }

  deleteAccolade(index){
    this.accoladesArray.splice(index, 1);
    this.accoladesChange.emit(this.accoladesArray);
  }

}
