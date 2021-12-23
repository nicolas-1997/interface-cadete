import { TestBed } from '@angular/core/testing';

import { UserIdentifierService } from './user-identifier.service';

describe('UserIdentifierService', () => {
  let service: UserIdentifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIdentifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
