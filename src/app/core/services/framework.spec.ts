import { TestBed } from '@angular/core/testing';

import { Framework } from './framework';

describe('Framework', () => {
  let service: Framework;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Framework);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
