import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jdivision',
  templateUrl: './jdivision.component.html',
  styleUrls: ['./jdivision.component.css']
})
export class JdivisionComponent implements OnInit {

  dividend = 22;
  divider = 4;
  quotient = 5.5;
  show: boolean = true;
  errorMessage = "";

  divideNumbers =  () =>{
    if(this.divider !== 0) {
      this.quotient = this.dividend/ this.divider;
      this.show = true;
      this.errorMessage = ""
    } else {
      this.errorMessage = "You can't divide a number with zero";
      this.show = false;

      return;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
