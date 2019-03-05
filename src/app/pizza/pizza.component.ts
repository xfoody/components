import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: String;
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

  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    //use the pizza service to load the available pizza pizzaToppingsFromWebService
    // let svc = new PizzaService()
    // Pro tip: use DI instead...!!
    this.availablePizzaToppings= this.pizzaSvc.loadPizzaToppings();
  }

}
