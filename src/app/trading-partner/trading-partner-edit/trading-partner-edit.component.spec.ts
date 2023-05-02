import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPartnerEditComponent } from './trading-partner-edit.component';

describe('TradingPartnerEditComponent', () => {
  let component: TradingPartnerEditComponent;
  let fixture: ComponentFixture<TradingPartnerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPartnerEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingPartnerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
