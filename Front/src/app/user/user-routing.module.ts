import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UDRestoComponent } from '../resto/udresto/udresto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"udRC",
    component:UDRestoComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
