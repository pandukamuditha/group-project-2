import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../../core/models/task';

@Component({
  selector: 'app-scheduling-lightbox',
  templateUrl: './scheduling-lightbox.component.html',
  styleUrls: ['./scheduling-lightbox.component.css']
})
export class SchedulingLightboxComponent {
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

  constructor(public activeModal: NgbActiveModal) {}

  saveTask() {
    this.action.emit(true);
    this.activeModal.close();
  }

  discardTask() {

  }

  deleteTask() {

  }
}
