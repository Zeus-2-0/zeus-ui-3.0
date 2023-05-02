import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerSearchComponent } from './trading-partner-search.component';

describe('TradingPartnerSearchComponent', () => {
  let component: TradingPartnerSearchComponent;
  let fixture: ComponentFixture<TradingPartnerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPartnerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingPartnerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
