import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');

    let headers;
    if(token) {
       headers  = req.headers
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    } else {
      headers = req.headers
      .set('Content-Type', 'application/json');
    }
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}
