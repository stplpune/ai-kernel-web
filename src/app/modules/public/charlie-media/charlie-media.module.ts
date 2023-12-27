import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharlieMediaRoutingModule } from './charlie-media-routing.module';
import { CharlieMediaComponent } from './charlie-media.component';


@NgModule({
  declarations: [
    CharlieMediaComponent
  ],
  imports: [
    CommonModule,
    CharlieMediaRoutingModule
  ]
})
export class CharlieMediaModule { }
