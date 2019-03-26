import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slackntell6',
  templateUrl: './slackntell6.component.html',
  styleUrls: ['./slackntell6.component.css']
})
export class Slackntell6Component implements OnInit {

  numberOne = 0;
  numberTwo = 0;
  answer = 0;

  subtraction = () => {
    this.answer = this.numberOne - this.numberTwo;
  }


  constructor() { }

  ngOnInit() {
  }

}
