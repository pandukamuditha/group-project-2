import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../../core/models/task';
import { TaskService } from '../../../core/services/task/task.service';

@Component({
  selector: 'app-scheduling-lightbox',
  templateUrl: './scheduling-lightbox.component.html',
  styleUrls: ['./scheduling-lightbox.component.css']
})
export class SchedulingLightboxComponent {
  // Placement of ngBootstrap Date Picker
  placement = 'top';

  public task = new Task(null, 'Hello', null, null, null, null, null, null);

  public roles = [
    {
      name: 'Development',
      value: 'dev'
    },
    {
      name: 'User Interface',
      value: 'ui'
    }
  ];

  constructor(public activeModal: NgbActiveModal) {}

}
