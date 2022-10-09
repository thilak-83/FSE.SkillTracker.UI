import { TestBed } from '@angular/core/testing';

import { SkillTrackerHttpInterceptor } from './skill-tracker-http.interceptor';

describe('SkillTrackerHttpInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SkillTrackerHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SkillTrackerHttpInterceptor = TestBed.inject(SkillTrackerHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
