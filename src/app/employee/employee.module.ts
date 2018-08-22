import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { CardComponent } from './landing/card/card.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { AddNotesComponent } from './task-details/add-notes/add-notes.component';
import { CalendarComponent } from './task-details/calendar/calendar.component';
import { ProjectDetailsComponent } from './task-details/project-details/project-details.component';
import { TaskComponent } from './task-details/task/task.component';
import { TeamComponent } from './task-details/team/team.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgbCalendar, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared-components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    EmployeeRoutingModule,
    SharedModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 90,
      outerStrokeWidth: 4,
      innerStrokeWidth: 4,
      outerStrokeColor: '#4c4794',
      innerStrokeColor: '#e7e8ea',
      animationDuration: 1000,
    })
  ],
  declarations: [
    EmployeeComponent,
    LandingComponent,
    CardComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileComponent,
    ProjectsComponent,
    AddNotesComponent,
    CalendarComponent,
    ProjectDetailsComponent,
    TaskComponent,
    TeamComponent,
    TaskDetailsComponent
  ],
  exports: [
  ]
})
export class EmployeeModule { }
