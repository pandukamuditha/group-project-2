import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
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
