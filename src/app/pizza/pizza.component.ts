import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'pizza-toppings',
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

    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

}
