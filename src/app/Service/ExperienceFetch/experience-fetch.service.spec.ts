import { TestBed } from '@angular/core/testing';

import { ExperienceFetchService } from './experience-fetch.service';

describe('ExperienceFetchService', () => {
  let service: ExperienceFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
