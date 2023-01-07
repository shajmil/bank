import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TeachersComponent } from './teachers.component';

const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
