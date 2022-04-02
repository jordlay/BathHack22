import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BraintrainingPageRoutingModule } from './braintraining-routing.module';

import { BraintrainingPage } from './braintraining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BraintrainingPageRoutingModule
  ],
  declarations: [BraintrainingPage]
})
export class BraintrainingPageModule {}
