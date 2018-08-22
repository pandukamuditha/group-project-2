import { TestBed, inject } from '@angular/core/testing';

import { AddnoteService } from './addnote.service';

describe('AddnoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddnoteService]
    });
  });

  it('should be created', inject([AddnoteService], (service: AddnoteService) => {
    expect(service).toBeTruthy();
  }));
});
