import { TestBed, inject } from '@angular/core/testing';

import { KatschingoService } from './katschingo.service';

describe('KatschingoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KatschingoService]
    });
  });

  it('should be created', inject([KatschingoService], (service: KatschingoService) => {
    expect(service).toBeTruthy();
  }));
});
