import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule 
        , MatButtonModule
        , MatCheckboxModule } from '@angular/material';
import { FullnameComponent } from './fullname/fullname.component';
import { DlnMultiplyComponent } from './dln-multiply/dln-multiply.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    FullnameComponent,
    DlnMultiplyComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
