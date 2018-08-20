import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EmployeeComponent } from './employee.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
