import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dln-multiply',
  templateUrl: './dln-multiply.component.html',
  styleUrls: ['./dln-multiply.component.css']
})
export class DlnMultiplyComponent implements OnInit {

  numberOne = 2;
  numberTwo = 2;
  answer = 4;
  multiplyNumbers = () => {
    this.answer = this.numberOne * this.numberTwo;
  }

  constructor() { }

  ngOnInit() {
  }

}
