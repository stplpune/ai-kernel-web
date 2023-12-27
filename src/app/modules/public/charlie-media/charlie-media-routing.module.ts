import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharlieMediaComponent } from './charlie-media.component';

const routes: Routes = [{ path: '', component: CharlieMediaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharlieMediaRoutingModule { }
