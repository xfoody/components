import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    // this is a pretend const that would ultimately come from a web service call
    const pizzaToppingsFromWebService = [
      {name: 'Pepperoni', price: 1.50}
      , {name: 'Olives', price: 3.50}
    ];

    return pizzaToppingsFromWebService.map(x => ({
      ...x
      // pizza checkboxes are defaulted to off
      , checked: false
    }));

  }
}
