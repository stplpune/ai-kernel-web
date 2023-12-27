import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('../../modules/public/home/home.module').then(m => m.HomeModule) },
  { path: 'what-is-charlie', loadChildren: () => import('../../modules/public/explore/what-is-charlie/what-is-charlie.module').then(m => m.WhatIsCharlieModule) },
  { path: 'covid19-solutions', loadChildren: () => import('../../modules/public/explore/covid19-solutions/covid19-solutions.module').then(m => m.Covid19SolutionsModule) },
  { path: 'retail', loadChildren: () => import('../../modules/public/industries/retail/retail.module').then(m => m.RetailModule) },
  { path: 'insights-resources', loadChildren: () => import('../../modules/public/resources/insights-resources/insights-resources.module').then(m => m.InsightsResourcesModule) },
  { path: 'about-us', loadChildren: () => import('../../modules/public/company/about-us/about-us.module').then(m => m.AboutUsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
