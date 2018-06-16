import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { CardComponent } from './landing/card/card.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EmployeeRoutingModule
  ],
  declarations: [
    EmployeeComponent,
    LandingComponent,
    CardComponent
  ],
  exports: [
  ]
})
export class EmployeeModule { }
