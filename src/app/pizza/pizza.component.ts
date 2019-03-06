import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
    public availablePizzaToppings;
//magic DI
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
      //use the pizza service to load the available pizza pizzaToppingsFromWebservice
      //let svc = new pizzaService()
      //:-(
      // use DI Instead
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaTopings();
  }

}