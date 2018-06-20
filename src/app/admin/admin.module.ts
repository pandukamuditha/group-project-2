import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin.component';



@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    NavBarComponent,
    TopBarComponent,
    DashboardComponent
  ],
  exports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
