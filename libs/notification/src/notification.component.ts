import { Component, OnInit } from '@angular/core';

import { ToasterConfig, ToasterService, ToasterModule } from 'angular2-toaster';

@Component({
  selector: 'ngx-notification',
  template: `
    <toaster-container [toasterconfig]="config">
    </toaster-container>
  `,
})
export class NotificationComponent implements OnInit {
  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  timeout = 50000;
  toastsLimit = 5;

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = false;

  animations = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
  positions = [
    'toast-top-full-width',
    'toast-bottom-full-width',
    'toast-top-left',
    'toast-top-center',
    'toast-top-right',
    'toast-bottom-right',
    'toast-bottom-center',
    'toast-bottom-left',
    'toast-center',
  ];

  constructor() {}

  ngOnInit() {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
  }
}
