import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersCulturesRoutingModule } from './careers-cultures-routing.module';
import { CareersCulturesComponent } from './careers-cultures.component';


@NgModule({
  declarations: [
    CareersCulturesComponent
  ],
  imports: [
    CommonModule,
    CareersCulturesRoutingModule
  ]
})
export class CareersCulturesModule { }
