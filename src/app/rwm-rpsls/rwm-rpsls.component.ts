import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rwm-rpsls',
  templateUrl: './rwm-rpsls.component.html',
  styleUrls: ['./rwm-rpsls.component.css']
})
export class RwmRpslsComponent implements OnInit {

  numberOne = 0;
  numberTwo = 0;
  answer = 0;
  calcOp = '+';

  
  addNumbers = () => {
    this.answer = this.numberOne + this.numberTwo;

    switch (this.calcOp) {
      case '+':
          this.answer = this.numberOne + this.numberTwo;
          break;
      case '-':
          this.answer = this.numberOne - this.numberTwo;
          break;
      case '*':
        this.answer = this.numberOne * this.numberTwo;
        break;
      case '/':
          this.answer = this.numberOne / this.numberTwo;
          break;

      default:

    }
  }


  constructor() { }

  ngOnInit() {
  }

}
