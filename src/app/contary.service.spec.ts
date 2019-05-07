import { TestBed } from '@angular/core/testing';

import { ContaryService } from './contary.service';

describe('ContaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaryService = TestBed.get(ContaryService);
    expect(service).toBeTruthy();
  });
});
