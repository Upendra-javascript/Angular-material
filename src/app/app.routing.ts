import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckboxComponent} from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormfieldComponent } from './formfield/formfield.component';
import { InputComponent } from './input/input.component';
import { MenuComponent} from './menu/menu.component';


const appRoutes : Routes =[
{path:'autocomplete',component : AutoCompleteComponent},   
{path :'checkbox' , component : CheckboxComponent},
{path:'datepicker',component:DatepickerComponent},
{path:'formfield',component:FormfieldComponent},
{path:'input',component:InputComponent},
{path:'menu',component:MenuComponent}
]


@NgModule({
   imports:[
    RouterModule.forRoot(appRoutes)
   ],
   exports:[
       RouterModule
   ]
})

export class AppRoutingModule {}

