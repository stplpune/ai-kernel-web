import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatIsCharlieRoutingModule } from './what-is-charlie-routing.module';
import { WhatIsCharlieComponent } from './what-is-charlie.component';


@NgModule({
  declarations: [
    WhatIsCharlieComponent
  ],
  imports: [
    CommonModule,
    WhatIsCharlieRoutingModule
  ]
})
export class WhatIsCharlieModule { }
