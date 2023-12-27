import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Covid19SolutionsComponent } from './covid19-solutions.component';

const routes: Routes = [{ path: '', component: Covid19SolutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Covid19SolutionsRoutingModule { }
