import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicSectorRoutingModule } from './public-sector-routing.module';
import { PublicSectorComponent } from './public-sector.component';


@NgModule({
  declarations: [
    PublicSectorComponent
  ],
  imports: [
    CommonModule,
    PublicSectorRoutingModule
  ]
})
export class PublicSectorModule { }
