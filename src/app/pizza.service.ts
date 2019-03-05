import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }
  public loadPizzaTopings() {
      //This is a pretend const that would ultimately come from a web service call
      const pizzaToppingsFromWebservice = [
      {
          name: 'peperoni',
          price: 1.50
      }
    ];

    return pizzaToppingsFromWebservice.map(x => ({
      ...x,
      checked: false
  }));
  }
}
