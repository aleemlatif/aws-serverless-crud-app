import { TestBed } from '@angular/core/testing';

import { UserDomainService } from './user-domain.service';

describe('UserDomainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDomainService = TestBed.get(UserDomainService);
    expect(service).toBeTruthy();
  });
});
