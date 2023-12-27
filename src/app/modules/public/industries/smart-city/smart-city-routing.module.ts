import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartCityComponent } from './smart-city.component';

const routes: Routes = [{ path: '', component: SmartCityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartCityRoutingModule { }
