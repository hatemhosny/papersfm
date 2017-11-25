import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  imports: [PagesRoutingModule, ThemeModule, DashboardModule, SharedModule],
  declarations: [PagesComponent, HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
