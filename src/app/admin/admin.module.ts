import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './new-project/scheduler/scheduler.component';
import { SchedulingLightboxComponent } from './new-project/scheduling-lightbox/scheduling-lightbox.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    AdminRoutingModule
  ],
  declarations: [
    SchedulerComponent,
    SchedulingLightboxComponent
  ],
  entryComponents: [
    SchedulingLightboxComponent
  ],
  exports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
