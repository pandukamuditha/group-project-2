import { Injectable } from '@angular/core';
import { Task } from '../models/task_';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/tasks/';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addTemporaryTask(task: Task) {
    return this.httpClient.post(baseUrl + 'temp/add', task);
  }
}
