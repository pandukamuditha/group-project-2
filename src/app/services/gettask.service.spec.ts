import { TestBed, inject } from '@angular/core/testing';

import { GettaskService } from './gettask.service';

describe('GettaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GettaskService]
    });
  });

  it('should be created', inject([GettaskService], (service: GettaskService) => {
    expect(service).toBeTruthy();
  }));
});
