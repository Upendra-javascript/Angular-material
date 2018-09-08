// core angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from  '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';


// --material import
import {MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';

 

// --component imports
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AppRoutingModule } from './app.routing';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { InputComponent } from './input/input.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
