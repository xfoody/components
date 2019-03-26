import { TestBed } from '@angular/core/testing';

import { TrumpipsumService } from './trumpipsum.service';

describe('TrumpipsumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrumpipsumService = TestBed.get(TrumpipsumService);
    expect(service).toBeTruthy();
  });
});
