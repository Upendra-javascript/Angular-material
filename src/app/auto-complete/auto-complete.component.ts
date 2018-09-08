import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,FormBuilder} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

    
  public options: string [] = ['One','Two','Three'];
  public angularForm : FormGroup;
  public stateForm : FormGroup;
  myControl = new FormControl();


  constructor (formBuilder:FormBuilder){
      this.angularForm = formBuilder.group({
        FirstName:[null],
        Lastname:[null]
      })
  }

  
  ngOnInit() {
  }

}
