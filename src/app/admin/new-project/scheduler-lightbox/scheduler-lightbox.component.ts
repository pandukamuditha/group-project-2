import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../../models/task_';

@Component({
  selector: 'app-scheduler-lightbox',
  templateUrl: './scheduler-lightbox.component.html',
  styleUrls: ['./scheduler-lightbox.component.css']
})

export class SchedulerLightboxComponent {
  // Placement of ngBootstrap Date Picker
  placement = 'top';
  @Output() action = new EventEmitter();
  public task = new Task();
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

  constructor(public activeModal: NgbActiveModal) { }

  saveTask() {
    this.task.start_date.setHours(0, 0, 0, 0);
    this.action.emit(
      {
        action: 'save',
        task: this.task
      }
    );
    this.activeModal.close();
  }

  discardTask() {
  }

  deleteTask() {
  }
}
