import { TestBed } from '@angular/core/testing';

import { UserServicgService } from './user-servicg.service';

describe('UserServicgService', () => {
  let service: UserServicgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
