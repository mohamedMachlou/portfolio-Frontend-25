import { TestBed } from '@angular/core/testing';

import { ProgrammingLanguage } from './programming-language';

describe('ProgrammingLanguage', () => {
  let service: ProgrammingLanguage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammingLanguage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
