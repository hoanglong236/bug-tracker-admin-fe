import { TestBed } from '@angular/core/testing';

import { SimpleHttpService } from './simple-http.service';

describe('SimpleHttpService', () => {
  let service: SimpleHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
