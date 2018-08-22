import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  getSkillList(emp : Employee){
    console.log(emp._id);
    return this.http.get(this.baseURL + `/skills/${emp._id}`);
  }

  putEmployee(emp : Employee){

    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
