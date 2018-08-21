import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { FormsModule }   from '@angular/forms';
import { Employee } from './employee.model';
import { Skill } from './skill.model';


@Injectable({
  providedIn: 'root'
})
export class HumanResourceService {
  selectedEmployee: Employee;
  employees: Employee[];
  skills: Skill[];
  readonly baseURL = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee){
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList(){
    return this.http.get(this.baseURL);
  }

  getSkillList(emp : Employee){
    console.log(emp.emp_id);
    return this.http.get(this.baseURL + `/skills/${emp.emp_id}`);
  }

  putEmployee(emp : Employee){
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
