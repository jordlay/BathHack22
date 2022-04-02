import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BraintrainingPage } from './braintraining.page';

const routes: Routes = [
  {
    path: '',
    component: BraintrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BraintrainingPageRoutingModule {}
