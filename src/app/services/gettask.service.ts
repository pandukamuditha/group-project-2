import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { Subtask } from '../models/subtask';

@Injectable({
  providedIn: 'root'
})
export class GettaskService {

  private _url = 'http://localhost:3000/api/task/';

  constructor(private _http: HttpClient) { }

  getTask(project_id: number): Observable<Task> {
    return this._http.get<Task>(this._url + 'task/' + project_id);
  }

  getSubTasks(task_id: number): Observable<Subtask[]> {
    return this._http.get<Subtask[]>(this._url + 'sub-tasks/' + task_id);
  }

  postTask(subtask: Subtask): Observable<Subtask> {
    return this._http.post<Subtask>(this._url + 'sub-task', subtask);
  }

  getCurrentSubId(task_id: number): Observable<number> {
    return this._http.get<number>(this._url + 'current-sub-task-id/' + task_id);
  }

  updateTaskStatus(subTask: Subtask, task_id: number): Observable<number> {
    return this._http.post<number>(this._url + 'update-sub-task-status/' + task_id, subTask);
  }
}
