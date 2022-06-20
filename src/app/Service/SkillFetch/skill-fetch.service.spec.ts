import { TestBed } from '@angular/core/testing';

import { SkillFetchService } from './skill-fetch.service';

describe('SkillFetchService', () => {
  let service: SkillFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
