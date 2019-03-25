import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dh-squareroot',
  templateUrl: './dh-squareroot.component.html',
  styleUrls: ['./dh-squareroot.component.css']
})
export class DhSquarerootComponent implements OnInit {

  numberToSquare = 25;
  answer = 5;

  squareNumber = () => {
    this.answer = Math.sqrt(this.numberToSquare);
  }

  constructor() { }

  ngOnInit() {
  }

}
