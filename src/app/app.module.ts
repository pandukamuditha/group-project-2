import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeModule } from './employee/employee.module';
import { HumanResourceModule } from './human-resource/human-resource.module';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared-components/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    AdminModule,
    EmployeeModule,
    HumanResourceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
