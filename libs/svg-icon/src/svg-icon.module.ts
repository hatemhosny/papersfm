import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineSVGModule } from 'ng-inline-svg';

import { SvgIconComponent } from './svg-icon.component';

@NgModule({
  imports: [CommonModule, InlineSVGModule],
  declarations: [SvgIconComponent],
  exports: [SvgIconComponent],
})
export class SvgIconModule {
}
