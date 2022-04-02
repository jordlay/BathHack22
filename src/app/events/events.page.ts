import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  postcode: string = "";
  entered: string = "";
  enteredBool = false;
  postcodeEntered()
  {
  	this.entered = this.postcode;
    this.enteredBool = true;
    // this.router.navigate(['/identity'],{
    //   queryParams: JSON.Stringify(data)
    // })
  }
}
