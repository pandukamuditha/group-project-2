import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './new-project/scheduler/scheduler.component';
import { SchedulingLightboxComponent } from './new-project/scheduling-lightbox/scheduling-lightbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SchedulerComponent,
    SchedulingLightboxComponent
  ],
  entryComponents: [
    SchedulingLightboxComponent
  ],
  exports: [
    SchedulerComponent,
    SchedulingLightboxComponent
  ]
})
export class AdminModule { }
