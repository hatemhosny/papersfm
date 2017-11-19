import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from '@app/notification';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  environmentName: string;

  constructor(private notificationService: NotificationService, private http: HttpClient) { }

  ngOnInit() {
    this.environmentName = environment.name;
  }

  showNotification() {
    this.notificationService.message('This is a notifcation!');
  }

  sendRequest() {
  this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  .subscribe(
        data => {
          data.forEach(item => {
            console.log('User ID: ' + item.userId);
            console.log('Title: ' + item.title);
            console.log('Body: ' + item.body);
          });
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        },
      );
  }

}

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}
