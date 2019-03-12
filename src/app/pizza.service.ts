import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {

    // This is a pretend const that would
    // ultimately come from a web service call.
    const pizzaToppingsFromWebService = [
      { name: 'Pepperoni', price: 1.50 }
      , { name: 'Olives', price: 3.50 }
      , { name: 'Mushrooms', price: 1.00}
      , { name: 'Green Peppers', price: 2.00}
    ];

    return pizzaToppingsFromWebService.map(x => ({
      ...x
      , checked: false
    }));
  }
}
