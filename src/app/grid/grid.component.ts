import { Component, Input, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { KatschingoService } from '../services/katschingo.service';
import { Penalty } from '../models/penalty';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input()
  user: string;

  penalties: Array<Penalty> = Array(25).fill({} as Penalty);

  constructor(private katschingo: KatschingoService) { }

  ngOnInit() {
    const nickname = this.user || 'timtilch';
    this.katschingo.getPenalties(nickname)
      .subscribe(penalties => this.insertPenalties(penalties));
  }

  insertPenalties(penalties: Array<Penalty>) {
    penalties.forEach(penalty => this.penalties[penalty.gridIndex] = penalty);
  }

}
