import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerResultsComponent } from './trading-partner-results.component';

describe('TradingPartnerResultsComponent', () => {
  let component: TradingPartnerResultsComponent;
  let fixture: ComponentFixture<TradingPartnerResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPartnerResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingPartnerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
