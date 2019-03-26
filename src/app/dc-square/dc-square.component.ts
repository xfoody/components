import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-square',
  templateUrl: './dc-square.component.html',
  styleUrls: ['./dc-square.component.css']
})
export class DcSquareComponent implements OnInit {

    number = 5;
    answer = 25;

  squareNumber = () => {
    this.answer = this.number * this.number;
  }

  constructor() { }

  ngOnInit() {
  }

}
