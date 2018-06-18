import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import 'dhtmlx-gantt';
import { } from '@types/dhtmlxgantt';

import { Task } from '../../../core/models/task';
import { TaskService } from '../../../core/services/task/task.service';
import { SchedulingLightboxComponent } from '../scheduling-lightbox/scheduling-lightbox.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})

export class SchedulerComponent implements OnInit {
  @ViewChild('ganttHere') ganttContainer: ElementRef;

  constructor(
    private taskService: TaskService,
    private renderer: Renderer2,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    gantt.config.xml_date = '%Y-%m-%d %H:%i';

    gantt.init(this.ganttContainer.nativeElement);

    gantt.attachEvent('onBeforeLightbox', () => {
      this.showLightbox();
    });
  }

  private serializeTask(data: any, insert: boolean = false): Task {
    return this.serializeItem(data, insert) as Task;
  }

  private serializeItem(data: any, insert: boolean): any {
    const result = {};

    for (const i in data) {
      if (i.charAt(0) === '$' || i.charAt(0) === '_') {
        continue;
      }
      if (insert && i === 'id') {
        continue;
      }
      if (data[i] instanceof Date) {
        result[i] = gantt.templates.xml_format(data[i]);
      } else {
        result[i] = data[i];
      }
    }
    return result;
  }

  showLightbox() {
    this.modalService.open(SchedulingLightboxComponent, { size: 'lg' });
  }
}

