import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { InfrastructureComponent } from './infrastructure.component';


@NgModule({
  declarations: [
    InfrastructureComponent
  ],
  imports: [
    CommonModule,
    InfrastructureRoutingModule
  ]
})
export class InfrastructureModule { }
