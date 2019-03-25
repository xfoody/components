import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule 
        
        , MatButtonModule
        , MatCheckboxModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { BoMultiplicationComponent } from './bo-multiplication/bo-multiplication.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    BoMultiplicationComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatInputModule
    , MatFormFieldModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
