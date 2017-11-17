import { Injectable, ErrorHandler } from '@angular/core';

import { NotificationService } from '../../../apps/web/src/app/@core/notification/notification.service';
import { environment } from '../../../apps/web/src/environments/environment';

declare let Raven: any;

class LogLevel {
  static ERROR = 'error';
  static WARNING = 'warning';
  static INFO = 'info';
}

export interface LogObject {
  error?: any;
  message?: string;
  notify?: boolean;
}

@Injectable()
export class LogService extends ErrorHandler {

  private defaultLog: LogObject = {
    message: 'An error has occured! An error report has been sent.',
    notify: false,
  };

  constructor(private notification: NotificationService) {
    // Rethrow exceptions that occur in bootstrap to angular
    super();
  }

  /* tslint:disable:no-console */
  /**
   * This method handles unhandeled exceptions caught by angular.
   * Exceptions thrown before angular loads should be caught by Raven.config().install() in index.html
   * For custom error handling use logError()
   */
  handleError(error: any): void {
    try {
      this.logError({ error: error, notify: true });
    } catch (err) {
      console.log(error);
      console.log(err);
    }
  }

  /**
   * This method should be used to handle exceptions
   */
  logError(logObj: LogObject): void {
    this.log(logObj, LogLevel.ERROR);
  }

  /**
   * Log +/- notify warning
   */
  logWarning(logObj: LogObject): void {
    this.log(logObj, LogLevel.WARNING);
  }

  /**
   * Log +/- notify message
   */
  logMessage(logObj: LogObject): void {
    this.log(logObj, LogLevel.INFO);
  }

  /**
   * The actual implementation of logging,
   * in development environment, it logs to console
   * otherwise, it sends logs to server
   */
  private log(logObj: LogObject, logLevel: LogLevel): void {

    // set defaults for unspecified log parameters
    logObj = Object.assign({}, this.defaultLog, logObj);

    // show notification message
    if (logObj.notify && logObj.message) {
      switch (logLevel) {
        case LogLevel.ERROR:
          this.notification.error(logObj.message);
          break;
        case LogLevel.WARNING:
          this.notification.warning(logObj.message);
          break;
        default:  // logLevel.info
          this.notification.info(logObj.message);
      }
    }

    // Raven additional data
    const options = {
      level: logLevel,
      tags: {
        client: environment.client,
      },
      extra: {
        message: logObj.message,
      },
    };


    // if in production, send to Sentry.io
    if (environment.production === true) {
      if (logObj.error) {
        Raven.captureException(logObj.error.originalError, options);
      } else {
        Raven.captureMessage(logObj.message, options);
      }
    }

    if (logObj.error) {
      super.handleError(logObj.error);   // use angular error handler
    } else if (environment.production === false) {
      console.log(logObj.message);       // if in development, log messages to console
    }

  }

}
