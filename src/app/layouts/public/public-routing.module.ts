import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('../../modules/public/home/home.module').then(m => m.HomeModule) },
  { path: 'what-is-charlie', loadChildren: () => import('../../modules/public/explore/what-is-charlie/what-is-charlie.module').then(m => m.WhatIsCharlieModule) },
  { path: 'covid19-solutions', loadChildren: () => import('../../modules/public/explore/covid19-solutions/covid19-solutions.module').then(m => m.Covid19SolutionsModule) },
  { path: 'retail', loadChildren: () => import('../../modules/public/industries/retail/retail.module').then(m => m.RetailModule) },
  { path: 'insights-resources', loadChildren: () => import('../../modules/public/resources/insights-resources/insights-resources.module').then(m => m.InsightsResourcesModule) },
  { path: 'about-us', loadChildren: () => import('../../modules/public/company/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'manufacturing', loadChildren: () => import('../../modules/public/industries/manufacturing/manufacturing.module').then(m => m.ManufacturingModule) },
  { path: 'infrastructure', loadChildren: () => import('../../modules/public/industries/infrastructure/infrastructure.module').then(m => m.InfrastructureModule) },
  { path: 'hospitality', loadChildren: () => import('../../modules/public/industries/hospitality/hospitality.module').then(m => m.HospitalityModule) },
  { path: 'smart-city', loadChildren: () => import('../../modules/public/industries/smart-city/smart-city.module').then(m => m.SmartCityModule) },
  { path: 'public-sector', loadChildren: () => import('../../modules/public/industries/public-sector/public-sector.module').then(m => m.PublicSectorModule) },
  { path: 'publications', loadChildren: () => import('../../modules/public/resources/publications/publications.module').then(m => m.PublicationsModule) },
  { path: 'careers-cultures', loadChildren: () => import('../../modules/public/company/careers-cultures/careers-cultures.module').then(m => m.CareersCulturesModule) },
  { path: 'success-stories', loadChildren: () => import('../../modules/public/success-stories/success-stories.module').then(m => m.SuccessStoriesModule) },
  { path: 'charlie-media', loadChildren: () => import('../../modules/public/charlie-media/charlie-media.module').then(m => m.CharlieMediaModule) },
  { path: 'contact-us', loadChildren: () => import('../../modules/public/contact-us/contact-us.module').then(m => m.ContactUsModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
