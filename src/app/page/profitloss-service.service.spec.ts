import { TestBed } from '@angular/core/testing';

import { ProfitlossServiceService } from './profitloss-service.service';

describe('ProfitlossServiceService', () => {
  let service: ProfitlossServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfitlossServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
