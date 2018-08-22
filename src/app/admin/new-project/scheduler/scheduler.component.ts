import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import 'dhtmlx-gantt';
import { } from '@types/dhtmlxgantt';
import { SchedulerLightboxComponent } from '../scheduler-lightbox/scheduler-lightbox.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../../../models/task_';
import { TaskService } from '../../../services/task.service';
import { Promise } from 'q';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})

export class SchedulerComponent implements OnInit {
  @ViewChild('ganttHere') ganttContainer: ElementRef;
  tasks: Task[];

  constructor(
    private renderer: Renderer2,
    private modalService: NgbModal,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    gantt.config.fit_tasks = true;
    gantt.config.xml_date = '%d-%m-%Y %H:%i';
    gantt.config.min_column_width = 20;
    gantt.config.date_scale = '%d';
    gantt.config.subscales = [
      { unit: 'month', step: 1, date: '%M' }
    ];
    gantt.init(this.ganttContainer.nativeElement);

    // gantt.load();

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

    modelRef = this.modalService.open(SchedulerLightboxComponent, { size: 'lg' });
    modelRef.componentInstance.action.subscribe((data) => {
      switch (data.action) {
        case 'save':
          console.log(task.start_date);
          const taskDetails = {
            id: task.id,
            text: data.task.title,
            start_date: data.task.start_date,
            duration: data.task.duration
          };
          task.$new ? this.saveNewTask(task, taskDetails, data) : this.updateTask();
          break;
        case 'discard':

          break;
        case 'delete':

          break;
      }
    });

    // console.log(modelRef.componentInstance);
    // modelRef.componentInstance.task = {
    //   title: task.text,
    //   description: 'Hahaha',
    //   startDate: task.start_date,
    //   duration: task.duration
    // };
  }


  loadTasks(projectId: number) {

  }

  saveNewTask(task, taskDetails, data) {
    this.taskService.addTemporaryTask(data.task).subscribe(
      (result) => {
        gantt.addTask(taskDetails, 'Parent');
        task.$new = false;
      },
      (err) => {
        console.log(err);
        gantt.deleteTask(task.id);
      }
    );
  }

  updateTask() {

  }
}
