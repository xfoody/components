import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    //use the pizza service to load the available pizza pizzaToppingsFromWebService
    // let svc = new PizzaService()
    // Pro tip: use DI instead...!!
    const foo = this.pizzaSvc.loadPizzaToppings();
    console.log(foo);
  }

}
