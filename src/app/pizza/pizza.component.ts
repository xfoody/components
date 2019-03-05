import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  //magic DI !!!
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    //use the pizza service to load the variable pizaa topping

    //let svc = new PizzaService();




    // : - (
    // use DI instead...
    const foo = this.pizzaSvc.loadPizzaToppings();

    console.log(foo);
  }

}
