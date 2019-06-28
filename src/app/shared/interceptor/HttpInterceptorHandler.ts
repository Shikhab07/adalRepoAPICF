import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse} from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import { isNullOrUndefined } from 'util';

// services

import { AdalService } from 'app/adal.service';
import { Observable } from 'rxjs';

/**
 * The following class is intercepting the HTTP-request.
 * Make it possible to grab HTML status codes etc for instance logging or error handling.
 */
@Injectable()
export class HttpInterceptorHandler implements HttpInterceptor {

  constructor(public adal: AdalService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.adal.clientToken;

    if (this.adal.isInitialized) {
      if (!isNullOrUndefined(token)) {
        req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
      }
      if (!req.headers.has('Content-Type')) {
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      }
      if (!req.headers.has('Accept')) {
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      }
    }
    return next
      .handle(req)
      .catch(response => {
        if (response instanceof HttpErrorResponse) {
          this.handleHTTPStatus(response.status, response.error);
        }
        return Observable.throw(response);
      });
  }

  private handleHTTPStatus(status: number, error: any) {
    if (status === 500 && error) {
    }
    // if status code 400 show bad request message for the user.
    if (status === 400 && error) {
    }
    if ((status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
    }
  }
}
