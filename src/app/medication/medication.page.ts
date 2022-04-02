import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.page.html',
  styleUrls: ['./medication.page.scss'],
})
export class MedicationPage implements OnInit {

  constructor() { }
  medicationAddedBool = false;
  selectedMeds = false;
  medications = ''
  submitBool = false;
  ngOnInit() {
  }
  // selectedMedications(){
  //   this.selectedMeds=true
  // }
}
