import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    // This is a pretend const that will ultimately 
    // come from a web service call (coming soon).
    const pizzaToppingsFromWebService = [
      { name: 'Pepperoni', price: 1.50 }
      , { name: 'Olives', price: 3.50 }
    ];

    return pizzaToppingsFromWebService.map(x => ({
      ...x
      , checked: false
    }));
  }
}
