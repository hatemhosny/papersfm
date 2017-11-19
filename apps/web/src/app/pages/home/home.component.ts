import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from '@app/notification';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  environmentName: string;

  posts: Post[];

<<<<<<< HEAD
  constructor(private notificationService: NotificationService, private http: HttpClient) {}
=======
  constructor(
    private notificationService: NotificationService,
    private http: HttpClient,
  ) {}
>>>>>>> http demo

  ngOnInit() {
    this.environmentName = environment.name;
  }

  showNotification() {
    this.notificationService.message('This is a notifcation!');
  }

  sendRequest() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      // Retry this request up to 3 times.
      .retry(3)
      .subscribe(
        data => {
          this.posts = data;
          this.notificationService.success('Data fetched!');
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side error occurred. Handle it accordingly.
            this.notificationService.error('Client-side error: ' + err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            this.notificationService.error(`
              Server-side error: code ${err.status}, body was: ${err.error}
            `);
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
