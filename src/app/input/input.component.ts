import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  angular : FormGroup;

  emailFormControl = new FormControl('',[Validators.required,Validators.email])

  constructor() { }

  ngOnInit() {
  }
  matcher = new ErrorStateMatcher();

}
