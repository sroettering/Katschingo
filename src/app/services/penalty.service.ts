import { Injectable } from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';

@Injectable()
export class PenaltyService {

  constructor(private backand: BackandService) { }

}
