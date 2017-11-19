import { Directive, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';

@Directive({
  selector: '[pfmFullscreen]',
})
export class FullscreenDirective {
  @HostListener('click')
  onClick() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
