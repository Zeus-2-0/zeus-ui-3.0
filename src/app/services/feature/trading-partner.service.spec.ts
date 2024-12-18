import { TestBed } from '@angular/core/testing';

import { TradingPartnerService } from './trading-partner.service';

describe('TradingPartnerService', () => {
  let service: TradingPartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradingPartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
