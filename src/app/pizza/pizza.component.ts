import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';


interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'pizza-toppings',//
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})


export class PizzaComponent implements OnInit {

  public availablePizzaToppings: PizzaToppingDisplay[];
  total = 0;
  public calculateTotal = () => {
    this.total = this.availablePizzaToppings
    .filter(x => x.checked)
    .reduce(
       (acc, x) => acc + x.price
       , 0
    );
  }

  //magic DI !!!
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    //use the pizza service to load the variable pizaa topping

    //let svc = new PizzaService();

    // : - (
    // use DI instead...
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();

  }

}
