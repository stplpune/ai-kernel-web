import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatIsCharlieComponent } from './what-is-charlie.component';

const routes: Routes = [{ path: '', component: WhatIsCharlieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatIsCharlieRoutingModule { }
