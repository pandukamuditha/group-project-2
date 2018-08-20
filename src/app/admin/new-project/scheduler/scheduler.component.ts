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
  tasks = {
    data: [
      { id: 1, text: 'Project #1', start_date: '01-04-2017', duration: 18 },
      { id: 2, text: 'Task #1', start_date: '02-04-2017', duration: 8, parent: 1 },
      { id: 3, text: 'Task #2', start_date: '11-04-2017', duration: 8, parent: 1 }
    ]
  };

  constructor(
    private taskService: TaskService,
    private renderer: Renderer2,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    gantt.config.xml_date = '%d-%m-%Y %H:%i';
    gantt.config.min_column_width = 8;
    gantt.config.date_scale = '%d';
    gantt.config.subscales = [
      { unit: 'month', step: 1, date: '%M' }
    ];
    gantt.config.fit_tasks = true;

    gantt.init(this.ganttContainer.nativeElement);
    gantt.parse(this.tasks);

    gantt.attachEvent('onBeforeLightbox', (id) => {
      const task = gantt.getTask(id);
      this.showLightbox(task);
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

  showLightbox(task) {
    let modelRef;
    if (task.$new) {
      modelRef = this.modalService.open(SchedulingLightboxComponent, { size: 'lg' });
      modelRef.componentInstance.action.subscribe((value) => {
        console.log(value);
      });
    } else {
      console.log(task);
      modelRef = this.modalService.open(SchedulingLightboxComponent, { size: 'lg' });
      console.log(modelRef.componentInstance);
      modelRef.componentInstance.task = {
        title: task.text,
        description: 'Hahaha',
        startDate: task.start_date,
        duration: task.duration
      };
    }
  }
}

