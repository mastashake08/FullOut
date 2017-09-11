import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MasterDataService} from '../../../providers/master-data';

/*
  Generated class for the AllSkills page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-all-skills',
  templateUrl: 'all-skills.html',
  providers: [MasterDataService]
})
export class AllSkills {

  constructor(public navCtrl: NavController, public navParams: NavParams, public masterData: MasterDataService) {}
  skills = {"skills":{"id":2,"user_id":2,"basic_running_spring":0,"basic_standing_spring":0,"advanced_running_spring":0,"advanced_standing_spring":0,"elite_running_spring":0,"elite_standing_spring":0,"basic_running_hardwood":0,"basic_standing_hardwood":0,"advanced_running_hardwood":0,"advanced_standing_hardwood":0,"elite_running_hardwood":0,"elite_standing_hardwood":0,"spring_floor_tumbling_skills":{"spring_floor_tumbling":{"basic_running":{"round_off":"on","backhand_spring":"on","front_walk_over":"on","round_off_2_backhand_spring":"on","round_off_3_backhand_spring":"on"},"basic_standing":{"bhs":"on","2_bhs":"on","3_bhs":"on"},"elite_standing":{"full":"on","bhs_full":"on","2_bhs_full":"on","3_bhs_full":"on","bhs_double":"on","3_bhs_double":"on","3_bhs_whip_full":"on","full_2_bhs_full":"on","3_bhs_whip_double":"on","full_3_bhs_double":"on"},"advanced_running":{"round_off_tuck":"on","round_off_bhs_tuck":"on","round_off_bhs_whip":"on","round_off_bhs_layout":"on","round_off_bhs_tuck_2_bhs":"on","round_off_bhs_whip_2_bhs_layout":"on"},"advanced_standing":{"2_bhs_layout":"on"}}},"hard_floor_tumbling_skills":{"hard_floor_tumbling":{"basic_running":{"round_off":"on","front_walk_over":"on","round_off_backhand_spring":"on","round_off_2_backhand_spring":"on","round_off_3_backhand_spring":"on"},"basic_standing":{"bhs":"on","2_bhs":"on","3_bhs":"on"}}},"group_stunting_skills":{"group_stunting":{"basic":{"group_stunting":{"extension":"on","power_press":"on","show_and_go":"on","prep_level_liberty":"on","extended_level_liberty":"on"}},"elite":{"front_hand_spring_up":{"liberty":"on","platform":"on"}}}},"coed_stunting_skills":{"coed_stunting":{"basic":{"walk_in":{"hands":"on","liberty":"on","stretch":"on","extension":"on"}},"dismounts":{"full_down":{"prep":"on","liberty":"on","extension":"on"}}}},"created_at":"2017-08-18 22:29:50","updated_at":"2017-09-03 18:16:18","team_id":1,"spring_stunting_score":0,"spring_tumbling_score":25,"hard_stunting_score":0,"hard_tumbling_score":8,"group_stunting_score":2,"coed_stunting_score":2}};
  ionViewDidLoad() {
    console.log('Hello AllSkillsPage Page');
    this.masterData.get('skill',null).subscribe(
                               data => {
                               console.log(data);
                               this.skills=data.skills

                               },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

  selectSkill(skill) {
    skill.isChecked = !skill.isChecked;
    if(skill.isChecked) {
      skill.icon = "checkbox-outline";
    } else {
      skill.icon = "square-outline";
    }
  }

}
