import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms'
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css']
})
export class FormfieldComponent implements OnInit {

  optionForm : FormGroup;
  options : FormGroup;
  hide = true;
  public hideRequiredMarker:any;
  email = new FormControl('',[Validators.required,Validators.email]);  
  constructor(private fb:FormBuilder) { 
    this.optionForm = fb.group ({
      hideRequired : false,
      floatLabel : 'auto'
    });
    this.options = fb.group({
      color:'primary',
      fontSize :[16,Validators.min(10)]
    })
  }

  ngOnInit() {
  }

  getErrorMessage(){
    return this.email.hasError('required')?'you must enter a value':this.email.hasError('email')?'not a valid email':'';
  }

  getFontSize(){
    return Math.max(10,this.options.value.fontSize);
  }

}
