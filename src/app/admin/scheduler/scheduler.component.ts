import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Task } from '../../core/models/task';
import { TaskService } from '../../core/services/task.service';

import 'dhtmlx-gantt';
import { } from '@types/dhtmlxgantt';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})

export class SchedulerComponent implements OnInit {
  @ViewChild('ganttHere') ganttContainer: ElementRef;
  @ViewChild('customLightbox') customLightbox: ElementRef;

  constructor(
    private taskService: TaskService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    gantt.config.xml_date = '%Y-%m-%d %H:%i';

    gantt.init(this.ganttContainer.nativeElement);

    let taskId;

    gantt.attachEvent('onBeforeLightbox', (id) => {
      this.renderer.setStyle(this.customLightbox.nativeElement, 'visibility', 'visible');
      taskId = id;
      const task = gantt.getTask(taskId);
      if (task.$new) {
        gantt.confirm({
          text: 'Create task?',
          callback: function (res) {
            if (res) {
              // ..apply values
              gantt.addTask(task, '0');
            } else {
              gantt.deleteTask(task.id);
            }
          }
        });
        return false;
      }
      return true;
    });

    gantt.attachEvent('onAfterTaskAdd', (id, item) => {
      this.taskService.insert(this.serializeTask(item, true))
        .then((response) => {
          if (response.id !== id) {
            gantt.changeTaskId(id, response.id);
          }
        });
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

  addTask() {
    gantt.addTask();
  }
}

