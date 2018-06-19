import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { CardComponent } from './card/card.component';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingComponent,
    CardComponent
  ],
  exports: [
    LandingComponent,
    CardComponent
  ]
})
export class LandingModule { }
