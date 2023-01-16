import { TestBed } from '@angular/core/testing';

import { OutInterceptor } from './out.interceptor';

describe('OutInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OutInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: OutInterceptor = TestBed.inject(OutInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
