import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup } from '@angular/forms';

import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  events : string[]=[];

  date = new FormControl (new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  minDate = new Date (2000,0,1);
  maxDate = new Date (2020,0,1);
  // toISOString method returns a string in simplified extended ISO format  which is always 24 or 27 characters

  // converts a Date object into a string 
    // The standard is called ISO-8601 And the formate is : YYYY-MM-DDTHH:mm:ss.sssz
    
  constructor() { }

  ngOnInit() {

  
  }

  addEvent(type:string , event:MatDatepickerInputEvent <Date>){
    this.events.push(`${type}: ${event.value}`)
  }

}
