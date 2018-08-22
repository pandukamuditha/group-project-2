import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from './top-bar/top-bar.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    TopBarComponent,
    NavBarComponent,
    LoginComponent
  ],
  exports: [
    TopBarComponent,
    NavBarComponent,
    LoginComponent
  ]
})
export class SharedModule { }
