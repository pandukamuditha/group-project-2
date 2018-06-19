import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: 'landing',
        component: LandingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
