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
        , MatFormFieldModule
        , MatInputModule} from '@angular/material';
import { JdivisionComponent } from './jdivision/jdivision.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DhSquarerootComponent } from './dh-squareroot/dh-squareroot.component';

@NgModule({
  declarations: [
    AppComponent
    , PizzaComponent
    , DhSquarerootComponent
    , JdivisionComponent
    , TjsAdditionComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatInputModule 
    , MatFormFieldModule
    , FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
