import { TestBed } from '@angular/core/testing';

import { Devops } from './devops';

describe('Devops', () => {
  let service: Devops;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Devops);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
