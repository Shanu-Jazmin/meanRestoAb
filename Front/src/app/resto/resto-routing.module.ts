import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRestoComponent } from './all-resto/all-resto.component';
import { UDRestoComponent } from './udresto/udresto.component';

const routes: Routes = [
  {
    path:"",
    component:AllRestoComponent
  },
  {
    path: ":id",
    component: UDRestoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
