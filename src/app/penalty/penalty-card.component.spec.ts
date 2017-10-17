import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyCardComponent } from './penalty-card.component';

describe('PenaltyComponent', () => {
  let component: PenaltyCardComponent;
  let fixture: ComponentFixture<PenaltyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
