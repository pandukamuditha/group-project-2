import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GettaskService } from '../../../services/gettask.service';
import { Task } from '../../../models/task';
import { Subtask } from '../../../models/subtask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  newSubtask = new Subtask();
  statusSubTask = new Subtask();

  task: Task;
  subTasks: Subtask[];
  project_id = 1;
  task_id;
  task_description = '';
  percentage = 0;

  @ViewChild(NgForm) subtaskForm: NgForm;

  constructor(private taskService: GettaskService) { }

  ngOnInit() {
    this.getTask();
    this.getCurrentId(this.task_id);
  }


  getSubTasks() {
    console.log(this.task_id);
    this.taskService.getSubTasks(this.task_id)
      .subscribe(res => {
        console.log(res);
        this.subTasks = res;
      });
  }

  getTask() {
    this.taskService.getTask(this.project_id)
      .subscribe(task => {
        this.task = task[0];
        this.task_id = this.task.task_id;
        this.task_description = this.task.task_description;
        this.getSubTasks();
      });
  }

  onSubmit() {
    this.newSubtask.Task_task_id = this.task_id;
    this.taskService.postTask(this.newSubtask)
      .subscribe(res => {
        this.subTasks.push(res[0]);
      });
    this.clearValues();
  }

  private clearValues() {
    this.subtaskForm.resetForm();
  }

  getCurrentId(task_id: number) {
    this.taskService.getCurrentSubId(task_id)
      .subscribe(res => {
        this.percentage = res[0].completed / this.subTasks.length * 100;
        console.log(this.percentage);
      });

  }

  onTaskChange(event: any, task_id: number) {
    this.statusSubTask.status = event.currentTarget.checked;
    this.taskService.updateTaskStatus(this.statusSubTask, task_id)
      .subscribe(res => {
        console.log(res);
        console.log(this.subTasks.length);
        this.percentage = res[0].completed / this.subTasks.length * 100;
        console.log(this.percentage);
      });
  }
}
