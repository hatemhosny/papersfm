import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../@core/notification/notification.service';
import {environment} from '../../../environments/environment';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  environmentName: string;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.environmentName = environment.name;
  }

  showNotification() {
    this.notificationService.message('This is a notifcation!');
  }

}
