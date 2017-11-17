import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppPagesComponent } from './app-pages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: AppPagesComponent ,
  children: [{
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'papers',
    loadChildren: './papers/papers.module#PapersModule',
  }, {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPagesRoutingModule {
}
