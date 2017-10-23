import { Component, Input, OnInit } from '@angular/core';
import { Penalty } from '../models/penalty';

@Component({
  selector: 'penalty-card',
  templateUrl: './penalty-card.component.html',
  styleUrls: ['./penalty-card.component.scss']
})
export class PenaltyCardComponent implements OnInit {

  @Input()
  penalty: Penalty;

  constructor() { }

  ngOnInit() {
    console.log(this.penalty);
  }

}
