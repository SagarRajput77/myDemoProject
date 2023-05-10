import { TestBed } from '@angular/core/testing';

import { SerCService } from './ser-c.service';

describe('SerCService', () => {
  let service: SerCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
