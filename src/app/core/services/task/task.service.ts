import { Injectable } from '@angular/core';
import { Task } from '../../models/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private task: Observable<Task | null>;
  private tasksCollection: AngularFirestoreCollection<Task>;

  constructor(
    private afs: AngularFirestore
  ) {
    // this.tasksCollection = this.afs.collection
  }
}
