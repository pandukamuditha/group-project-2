import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { CardComponent } from './card/card.component';
import { LandingComponent } from './landing.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    AppRoutingModule
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
