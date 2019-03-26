import { Component, OnInit } from '@angular/core';
import { TrumpipsumService } from '../trumpipsum.service';

export interface Option {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'trump-ipsum',
  templateUrl: './trumpipsum.component.html',
  styleUrls: ['./trumpipsum.component.css']
})

export class TrumpIpsumComponent implements OnInit {
  public selected;
  public trumpQuotes = [];
  public trumpIpsums = [];
  
  public options: Option[] = [
    {value: 1, viewValue: '1 Paragraph'}
    , {value: 2, viewValue: '2 Paragraphs'}
    , {value: 3, viewValue: '3 Paragraphs'}
    , {value: 4, viewValue: '4 Paragraphs'}
    , {value: 5, viewValue: '5 Paragraphs'}
  ];

  public generateIpsum = () => {
    this.trumpIpsums = this.trumpQuotes.slice().sort(() => Math.random() - 0.5).slice(0, this.selected);
  }

  // dependency injection
  constructor(public trumpipsumSvc: TrumpipsumService) { }

  ngOnInit() {
    this.trumpQuotes = this.trumpipsumSvc.loadTrumpIpsums();
  }
}
