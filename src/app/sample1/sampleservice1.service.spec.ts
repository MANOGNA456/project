import { TestBed } from '@angular/core/testing';

import { Sampleservice1Service } from './sampleservice1.service';

describe('Sampleservice1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Sampleservice1Service = TestBed.get(Sampleservice1Service);
    expect(service).toBeTruthy();
  });
});
