import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppPagesComponent } from './app-pages.component';
import { AppPagesRoutingModule } from './app-pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppSharedModule } from './app-shared/app-shared.module';

@NgModule({
  imports: [
    AppPagesRoutingModule,
    ThemeModule,
    DashboardModule,
    AppSharedModule,
  ],
  declarations: [
    AppPagesComponent,
    HomeComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppPagesModule {
}
