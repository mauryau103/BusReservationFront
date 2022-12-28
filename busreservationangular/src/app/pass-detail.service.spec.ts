import { TestBed } from '@angular/core/testing';

import { PassDetailService } from './pass-detail.service';

describe('PassDetailService', () => {
  let service: PassDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
