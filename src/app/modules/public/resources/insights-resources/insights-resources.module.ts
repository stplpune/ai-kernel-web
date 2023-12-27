import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightsResourcesRoutingModule } from './insights-resources-routing.module';
import { InsightsResourcesComponent } from './insights-resources.component';


@NgModule({
  declarations: [
    InsightsResourcesComponent
  ],
  imports: [
    CommonModule,
    InsightsResourcesRoutingModule
  ]
})
export class InsightsResourcesModule { }
