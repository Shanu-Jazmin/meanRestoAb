import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestoRoutingModule } from './resto-routing.module';
import { AllRestoComponent } from './all-resto/all-resto.component';
import { UDRestoComponent } from './udresto/udresto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllRestoComponent, UDRestoComponent],
  imports: [
    CommonModule,
    RestoRoutingModule,
    ReactiveFormsModule
  ]
})
export class RestoModule { }
