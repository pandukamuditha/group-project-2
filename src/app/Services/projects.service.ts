import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Projects[];
  readonly baseURL = 'http://localhost:3000/project';


  constructor(private http: HttpClient) { }

  getProjects(_id: string){
    return this.http.get(this.baseURL + `/${_id}`);
  }

  getAllProjects(_id: string){
    return this.http.get(this.baseURL + `/all/${_id}`);
  }
  
}
