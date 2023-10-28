import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthStorageService } from '../services/auth/auth-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authStorageService: AuthStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authorizationToken = this.authStorageService.getAuthorizationToken();
    if (!authorizationToken) {
      return next.handle(request);
    }

    const authorizationRequest = request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer ' + authorizationToken
      ),
    });
    return next.handle(authorizationRequest);
  }
}
