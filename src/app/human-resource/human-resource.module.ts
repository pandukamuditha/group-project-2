import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { HumanResourceComponent } from './human-resource.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HrLandingComponent } from './hr-landing/hr-landing.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    HumanResourceRoutingModule
    HumanResourceRoutingModule,
    FormsModule
  ],
  declarations: [
    HumanResourceComponent, 
    ManageUsersComponent, 
    RegisterUserComponent, 
    HrLandingComponent
  ]
})
export class HumanResourceModule { }
