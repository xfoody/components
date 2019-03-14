import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule
  ,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule 
        , MatButtonModule
        , MatCheckboxModule
      ,MatFormFieldModule} from '@angular/material';
import { JdivisionComponent } from './jdivision/jdivision.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    JdivisionComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    ,ReactiveFormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    ,MatFormFieldModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
