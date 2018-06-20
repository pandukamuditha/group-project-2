import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HumanResourceComponent } from './human-resource.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { HrLandingComponent } from './hr-landing/hr-landing.component';

const routes: Routes = [
  { path: 'hrmanager', 
  component: HumanResourceComponent,
    children: [
      {
        path: 'register',
        component: RegisterUserComponent
      },
      {
        path: 'manage',
        component: ManageUsersComponent
      },
      {
        path: 'landing',
        component: HrLandingComponent
      }
    ] 

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule { }
