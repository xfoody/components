import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})

export class PizzaComponent implements OnInit {

  // Magic Dependency Injection!!!
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    // Use the pizza service to load the available pizza toppings.
    // let svc = new PizzaService();
    // Use DI instead...

    const foo = this.pizzaSvc.loadPizzaToppings();
    console.log(foo);
  }

}
