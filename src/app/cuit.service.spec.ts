import { TestBed } from '@angular/core/testing';

import { CuitService } from './cuit.service';

describe('CuitService', () => {
  let service: CuitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
