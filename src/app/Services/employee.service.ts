import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // employee: Employee[];
  // // currentEmp: Employee;
  readonly baseURL = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) { }

  getEmployee(id: number){
    // console.log();
    return this.http.get<Employee>(this.baseURL + `/getemp/${id}`);
  }

  putEmployee(emp : Employee){
    console.log(emp.emp_id);
    return this.http.put(this.baseURL + `/updateemp/` + emp.emp_id , emp);
    // console.log(emp);
  }
}
