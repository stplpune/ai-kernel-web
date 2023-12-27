import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicSectorComponent } from './public-sector.component';

const routes: Routes = [{ path: '', component: PublicSectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSectorRoutingModule { }
