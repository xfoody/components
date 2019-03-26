import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule
  ,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { TrumpipsumComponent } from './trumpipsum/trumpipsum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule        
        , MatButtonModule
        , MatCheckboxModule
        , MatFormFieldModule
        , MatOptionModule
        , MatInputModule
        , MatSelectModule
        } from '@angular/material';
import { JdivisionComponent } from './jdivision/jdivision.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DhSquarerootComponent } from './dh-squareroot/dh-squareroot.component';
import { RwmRpslsComponent } from './rwm-rpsls/rwm-rpsls.component';
import { FullnameComponent } from './fullname/fullname.component';
import { DlnMultiplyComponent } from './dln-multiply/dln-multiply.component';
import { BoMultiplicationComponent} from './bo-multiplication/bo-multiplication.component';

@NgModule({
  declarations: [
    AppComponent
    , PizzaComponent
    , DhSquarerootComponent
    , JdivisionComponent
    , TjsAdditionComponent
    , RwmRpslsComponent
    , DlnMultiplyComponent
    , TrumpipsumComponent
    , BoMultiplicationComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatFormFieldModule
    , MatInputModule
    , MatOptionModule
    , MatSelectModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
