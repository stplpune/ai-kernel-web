import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'ref', component: ReferanceComponent },// For Testing purpose
  { path: '', component: PublicComponent, loadChildren: () => import('./layouts/public/public.module').then(m => m.PublicModule) },
  { path: '', component: SecureComponent, loadChildren: () => import('./layouts/secure/secure.module').then(m => m.SecureModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/after-login/dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'home', loadChildren: () => import('./modules/befor-login/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
