import { Component } from '@angular/core';
import { HomePage } from '../home/home.page';
import { BraintrainingPage } from '../braintraining/braintraining.page';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BraintrainingPage;
  // tab3Root = ContactPage;
  constructor() {}

}
