import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartCityRoutingModule } from './smart-city-routing.module';
import { SmartCityComponent } from './smart-city.component';


@NgModule({
  declarations: [
    SmartCityComponent
  ],
  imports: [
    CommonModule,
    SmartCityRoutingModule
  ]
})
export class SmartCityModule { }
