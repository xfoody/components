import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
// import {Component, OnInit, ViewChild} from '@angular/core';
// import {MatSort, MatTableDataSource} from '@angular/material';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

// export interface PeriodicElement {
//   numberOne: number;
//   numberTwo: number;
//   multiplication: number;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {numberOne: 1, numberTwo: 2, multiplication: 2},
//   {numberOne: 2, numberTwo: 3, multiplication: 6}
  
// ];

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})

export class PizzaComponent implements OnInit {

  public availablePizzaToppings: PizzaToppingDisplay[];
  total = 0;
  public recalculateTotal = () => {
    this.total = this.availablePizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price
        , 0
      );
  };


  public checkAll = () => {
    this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({...x, checked: true}))
    this.recalculateTotal();
  }

  public uncheckAll = () => {
    this.availablePizzaToppings = this.availablePizzaToppings.map(x => ({...x, checked: false}))
    this.recalculateTotal();
  }


//Typescript getter property.....
get showWarning() {
 // return this.availablePizzaToppings.filter(x=> x.checked).length == 0;

  return !this.availablePizzaToppings.some(x=> x.checked);

}



  // displayedColumns: string[] = ['numberOne', 'numberTwo', 'multiplication'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatSort) sort: MatSort;

  // Magic DI ! ! !
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {

    // Use the pizza service to load the available
    // pizza toppings.
    //
    // let svc = new PizzaService()
    //
    // : - (
    // Use DI instead...
    //this.dataSource.sort = this.sort;
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }


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
}
