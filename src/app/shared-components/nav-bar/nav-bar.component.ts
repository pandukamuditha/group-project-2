import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  employeeName: string;
  employeeRole: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    const userDetails = this.authService.getUserInfo();
    this.employeeName = userDetails.employeeName;
    switch (userDetails.userRole) {
      case 'employee':
        this.employeeRole = 'Employee';
        break;
      case 'pm':
        this.employeeRole = 'Project Manager';
        break;
      case 'hr':
        this.employeeRole = 'Human Resources Manager';
        break;
    }
  }

}
