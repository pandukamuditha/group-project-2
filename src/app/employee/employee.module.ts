import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { LandingModule } from './landing/landing.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    EmployeeComponent,
    LandingComponent
  ],
  exports: [  ]
})
export class EmployeeModule { }
