import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { retry, map } from 'rxjs/operators';

import { Employee } from '../models/employee';

const baseUrl = 'http://localhost:3000/api/auth/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(user: Employee) {

    return this.httpClient.post<any>(
      baseUrl + 'login',
      {
        username: user.username,
        password: user.password
      }
    ).pipe(
      retry(3),
      map(res => {
        if (res.auth) {
          this.setSession(res);
          console.log(res);

          return res;
        }
        return res;
      }),
    );
  }

  setSession(sessionData) {
    const expiresAt = moment().add(sessionData.expiresIn, 'second');

    localStorage.setItem('token', sessionData.token);
    localStorage.setItem('expiresAt', expiresAt.toString());
    localStorage.setItem('userRole', sessionData.userRole);
    localStorage.setItem('userId', sessionData.userId);
    localStorage.setItem('employeeName', sessionData.employeeName);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    localStorage.removeItem('employeeName');

    this.router.navigateByUrl('/');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserInfo() {
    return {
      userId: localStorage.getItem('userId'),
      employeeName: localStorage.getItem('employeeName'),
      userRole: localStorage.getItem('userRole')
    };
  }

  isLoggedIn() {
    return moment().isBefore(this.getTokenExpiration());
  }

  getTokenExpiration() {
    const expiresAt = localStorage.getItem('expiresAt');
    return moment(expiresAt);
  }
}
