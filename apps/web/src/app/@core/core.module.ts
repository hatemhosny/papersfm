import { ModuleWithProviders, NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToasterModule } from 'angular2-toaster';


import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from '@papersfm/data';
import { AnalyticsService } from './utils/analytics.service';

import { CoreComponent } from './core.component';
import { LogService } from '@papersfm/log';
import { NotificationService } from './notification/notification.service';
import { NotificationComponent } from './notification/notification.component';
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
  imports: [
    ToasterModule,
  ],
  exports: [
    CoreComponent,
  ],
  declarations: [
    NotificationComponent,
    CoreComponent,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
