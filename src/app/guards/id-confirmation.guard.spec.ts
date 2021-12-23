import { TestBed } from '@angular/core/testing';

import { IdConfirmationGuard } from './id-confirmation.guard';

describe('IdConfirmationGuard', () => {
  let guard: IdConfirmationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdConfirmationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
