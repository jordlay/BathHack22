import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

  constructor() { }
  continueBool = false;
  levelBool = false;
  level = ''
  conditions = ''
  healthYesBool = false;
  healthNoBool = false;
  selectedBool = false;
  ngOnInit() {
  }
  tapToContinue(){
    this.continueBool = true;
  }
  saveBeginnerLevel(){
    this.level = 'Beginner';
    this.levelBool = true;
  }
  saveIntermediateLevel(){
    this.level = 'Intermediate';
    this.levelBool = true;
  }
  saveAdvancedLevel(){
    this.level = 'Advanced';
    this.levelBool = true;
  }
  onYes(){
    this.healthYesBool = true;
  }
  onNo(){
    this.healthNoBool = true;
  }
  selectedConditions(){
    // redundant
    // this.conditions = this.conditions;
    console.log("print print", this.selectedBool)
    this.selectedBool = true;
    console.log("print print", this.selectedBool)
  }
}
