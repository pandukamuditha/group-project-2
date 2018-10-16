import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin.component';
import { SharedModule } from '../shared-components/shared.module';
import { NewProjectComponent } from './new-project/new-project.component';
import { SchedulerComponent } from './new-project/scheduler/scheduler.component';
import { SchedulerLightboxComponent } from './new-project/scheduler-lightbox/scheduler-lightbox.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailsComponent } from './new-project/project-details/project-details.component';
import { AllocationComponent } from './new-project/allocation/allocation.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    NewProjectComponent,
    SchedulerComponent,
    SchedulerLightboxComponent,
    ProjectDetailsComponent,
    AllocationComponent
  ],
  exports: [
    AdminRoutingModule
  ],
  entryComponents: [
    SchedulerLightboxComponent
  ]
})
export class AdminModule { }
