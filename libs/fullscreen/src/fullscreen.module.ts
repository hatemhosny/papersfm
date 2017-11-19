import { NgModule } from '@angular/core';
import { FullscreenDirective } from './fullscreen.directive';

@NgModule({
  declarations: [FullscreenDirective],
  exports: [FullscreenDirective],
})
export class FullscreenModule {
}
