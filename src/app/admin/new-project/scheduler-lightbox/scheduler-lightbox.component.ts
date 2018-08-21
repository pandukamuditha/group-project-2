import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-scheduler-lightbox',
  templateUrl: './scheduler-lightbox.component.html',
  styleUrls: ['./scheduler-lightbox.component.css']
})

export class SchedulerLightboxComponent {
  // Placement of ngBootstrap Date Picker
  placement = 'top';
  @Output() action = new EventEmitter();
  public task = new Task(null, null, null, null, null, null, null, null);
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
    this.action.emit(
      {
        action: 'save',
        values: this.task
      }
    );
    this.activeModal.close();
  }

  discardTask() {
  }

  deleteTask() {
  }
}
