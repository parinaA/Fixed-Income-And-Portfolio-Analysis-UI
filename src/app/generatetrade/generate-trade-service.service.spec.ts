import { TestBed } from '@angular/core/testing';

import { GenerateTradeServiceService } from './generate-trade-service.service';

describe('GenerateTradeServiceService', () => {
  let service: GenerateTradeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateTradeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
