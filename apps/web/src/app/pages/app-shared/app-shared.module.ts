import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';

import { CardsModule } from './cards/cards.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    RouterModule,
    ThemeModule,
    CardsModule,
  ],
  declarations: [
    BreadcrumbsComponent,
  ],
  exports: [
    RouterModule,
    CardsModule,
    BreadcrumbsComponent,
  ],
})
export class SharedModule { }
