import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerCockpitComponent } from './trading-partner-cockpit.component';

describe('TradingPartnerCockpitComponent', () => {
  let component: TradingPartnerCockpitComponent;
  let fixture: ComponentFixture<TradingPartnerCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPartnerCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingPartnerCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
