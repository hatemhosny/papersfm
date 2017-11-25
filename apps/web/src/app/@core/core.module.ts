import { ModuleWithProviders, NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ToasterModule } from 'angular2-toaster';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from '@app/data';
import { AnalyticsService } from './utils/analytics.service';

import { CoreComponent } from './core.component';
import { LogService } from '@app/log';
import { NotificationService, NotificationComponent } from '@app/notification';
import { BreadcrumbsService } from '../@shared/breadcrumbs/breadcrumbs.service';

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  AnalyticsService,
  LogService,
  { provide: ErrorHandler, useExisting: LogService },
  NotificationService,
  BreadcrumbsService,
];

@NgModule({
  imports: [ToasterModule, HttpClientModule],
  exports: [CoreComponent],
  declarations: [NotificationComponent, CoreComponent],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS],
    };
  }
}
