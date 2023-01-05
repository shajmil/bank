import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
{
path:'',component:LoginComponent
},{
  path:'registration',component:RegistrationComponent
},

{
  path:'dashboard',component:DashboardComponent
},
{
  path:'orders',component:OrdersComponent
},
{
  path:'about',component:AboutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
