import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg = '';
  user = new Employee('', '');

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.authService.login(this.user).subscribe(
      (data) => {
        this.authRedirect(data.userRole);
      },
      (err) => {
        console.log(err);
        if (!err.error.user) {
          this.errorMsg = 'User Not Found';
        } else if (!err.error.password) {
          this.errorMsg = 'Password Does Not Match';
        }
      }
    );
  }

  authRedirect(userRole: string): void {
    switch (userRole) {
      case 'employee':
        this.router.navigateByUrl('employee');
        break;
      case 'pm':
        this.router.navigateByUrl('admin');
        break;
      case 'hr':
        this.router.navigateByUrl('hrm');
        break;
    }
  }

}
