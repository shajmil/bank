import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeachersComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class TeachersModule { }
