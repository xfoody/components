import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatButtonModule
    , MatCheckboxModule
    , MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
