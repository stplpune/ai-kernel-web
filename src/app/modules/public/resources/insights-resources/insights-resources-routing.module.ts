import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsResourcesComponent } from './insights-resources.component';

const routes: Routes = [{ path: '', component: InsightsResourcesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsResourcesRoutingModule { }
