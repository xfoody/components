import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  public loadPizzaToppings() {
    //this is a pretend const that would ultimately come from a web service call
    const pizzaToppingFromWebService = [
      {name:'Pepperoni', price: 1.50}
      , {name:'Olive', price: 3.50}
    ];

    return pizzaToppingFromWebService.map(x => ({
      ...x
      ,checked:false
    }));


  }
}
