import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('Task.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));
});
