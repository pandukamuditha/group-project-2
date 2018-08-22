import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopBarComponent} from './top-bar/top-bar.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
