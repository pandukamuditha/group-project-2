import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './new-project/scheduler/scheduler.component';
import { SchedulingLightboxComponent } from './new-project/scheduling-lightbox/scheduling-lightbox.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    SchedulerComponent,
    SchedulingLightboxComponent
  ],
  entryComponents: [
  ],
  exports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
