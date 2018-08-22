import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavLinksService {
  links = {
    'Project Manager': [
      {
        'title': 'Dashboard',
        'link': './dashboard'
      },
      {
        'title': 'Projects',
        'link': './projects'
      }
    ],
    'Human Resources Manager': [
      {
        'title': 'Dashboard',
        'link': './dashboard'
      },
      {
        'title': 'Register Employees',
        'link': './register'
      },
      {
        'title': 'Manage Employees',
        'link': './manage'
      }
    ],
    'Employee': [
      {
        'title': 'Dashboard',
        'link': './dashboard'
      },
      {
        'title': 'Projects',
        'link': './projects'
      },
      {
        'title': 'Profile',
        'link': './profile'
      }
    ]
  };

  constructor() { }

  getUserNav(userRole: string) {
    return this.links[userRole];
  }
}
