import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

// help define shape of data (does not generate any JS)
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

  // declare availablePizzaToppings which is an array
  // of PizzaToppingDisplay objects
  public availablePizzaToppings: PizzaToppingDisplay [];
  public total = 0; // type inferred since init to 0
  public calculateTotal = () => {
    this.total = this.availablePizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price
        , 0
      );
  }

  // "Magic" DI
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit() {
    // Use the pizza service to load the available 
    // pizza toppings
    //
    // let svc = new PizzaService() -- NO; use DI 
    // (dependency injection) instead
    
    this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

}
