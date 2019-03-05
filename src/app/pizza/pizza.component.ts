import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service'

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  public availablePizzaToppings: PizzaToppingDisplay[];

  // Magic DI ! ! ! (dependency injection)
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {

    // Use the pizza service to load the available pizza toppings
    //
    // let svc = new PizzaService()
    //
    // : - (
    // Use DI (dependency injection) instead...

    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

}
