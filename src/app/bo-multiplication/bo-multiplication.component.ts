import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bo-multiplication',
  templateUrl: './bo-multiplication.component.html',
  styleUrls: ['./bo-multiplication.component.css']
})


export class BoMultiplicationComponent implements OnInit {

// angular.module('CalculatorApp', []) .controller('CalculatorController', function($scope) {
  numberOne = 10;
  numberTwo = 5;
  result = 50;

  docalculation = () => {
    //if (operator = '*') {
      this.result = this.numberOne * this.numberTwo;      
    //}
    //if (operator = '+') {
      //this.answer = this.numberOne + this.numberTwo;
    //}
    
  }

// });

  constructor() { }

  ngOnInit() {
  }

}
