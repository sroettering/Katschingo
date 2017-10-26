import { Injectable } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

import { Penalty } from '../models/penalty';

@Injectable()
export class KatschingoService {

  constructor(private backand: BackandService) { }

  getPenalties(nickname: string): Observable<Array<Penalty>> {
    return Observable.fromPromise(this.backand.query.get('findPenaltiesForNickname', { nickname }))
      .map(response => response['data'] as Penalty[]);
  }

}
