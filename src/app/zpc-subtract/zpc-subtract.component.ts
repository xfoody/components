import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zpc-subtract',
  templateUrl: './zpc-subtract.component.html',
  styleUrls: ['./zpc-subtract.component.css']
})
export class ZpcSubtractComponent implements OnInit {

  numberOne = 0;
  numberTwo = 0;
  answer = 0;
  subtractNumbers = () => {
    this.answer = this.numberOne - this.numberTwo;
  }

  constructor() { }

  ngOnInit() {
  }

}
