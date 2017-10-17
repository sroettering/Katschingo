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

  penalties: Array<Penalty>;

  constructor(private backand: BackandService) { }

  ngOnInit() {
    Observable.fromPromise(this.backand.query.get('findPenaltiesForNickname', { nickname: 'timtilch' }))
      .subscribe(response => this.penalties = response['data']);
  }

}
