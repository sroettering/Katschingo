import { Component, Input, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BackandService } from '@backand/angular2-sdk';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

import { Penalty } from '../models/penalty';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input()
  user: string;

  penalties: Array<Penalty> = [];

  constructor(private backand: BackandService) { }

  ngOnInit() {
    const nickname = this.user || 'timtilch';
    Observable.fromPromise(this.backand.query.get('findPenaltiesForNickname', { nickname }))
      .map(response => response['data'])
      .map(penalties => penalties.sort((penA, penB) => penA.gridIndex - penB.gridIndex))
      .subscribe(penalties => this.penalties = penalties);
  }

}
