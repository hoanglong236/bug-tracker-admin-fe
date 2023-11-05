import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    let status: string;

    return next.handle(request).pipe(
      tap({
        next: (event) =>
          (status = event instanceof HttpResponse ? 'succeeded' : ''),
        error: (err) => {
          console.error(err);
          status = 'failed';
        },
      }),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${request.method} "${request.urlWithParams}" ${status} in ${elapsed} ms.`;
        console.log(msg);
      })
    );
  }
}
