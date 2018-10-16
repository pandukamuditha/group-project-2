import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { SchedulerComponent } from './new-project/scheduler/scheduler.component';
import { ProjectDetailsComponent } from './new-project/project-details/project-details.component';
import { AllocationComponent } from './new-project/allocation/allocation.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'new-project',
        component: NewProjectComponent,
        children: [
          {
            path: 'project-details',
            component: ProjectDetailsComponent
          },
          {
            path: 'schedule',
            component: SchedulerComponent
          },
          {
            path: 'allocation',
            component: AllocationComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
