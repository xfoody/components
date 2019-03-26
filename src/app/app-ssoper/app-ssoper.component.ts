import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssoper',
  templateUrl: './app-ssoper.component.html',
  styleUrls: ['./app-ssoper.component.css']
})
export class AppSsoperComponent implements OnInit {

  numberOne = 10;
  numberTwo = 5;
  answer=0;

  moduloNumbers = () => {
    this.answer = this.numberOne % this.numberTwo
  }

  constructor() { }

  ngOnInit() {
  }

}
