import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../services/employee.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  employee = new Employee();

  constructor(private employeeService: EmployeeService) { }


  ngOnInit() {
    this.getEmployee(2);
  }


  getEmployee(id: number) {
    this.employeeService.getEmployee(id).subscribe(
      (res) => {
        this.employee = res[0];
      });
  }

  onSubmit(emp: Employee) {
    this.employeeService.putEmployee(emp).subscribe((res) => {
    });
  }

}
