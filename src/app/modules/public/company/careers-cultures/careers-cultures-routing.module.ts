import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersCulturesComponent } from './careers-cultures.component';

const routes: Routes = [{ path: '', component: CareersCulturesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersCulturesRoutingModule { }
