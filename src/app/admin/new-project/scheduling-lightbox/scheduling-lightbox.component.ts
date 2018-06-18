import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scheduling-lightbox',
  templateUrl: './scheduling-lightbox.component.html',
  styleUrls: ['./scheduling-lightbox.component.css']
})
export class SchedulingLightboxComponent {
  @Input() name;
  placement = 'top';

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
