import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {exhaustMap, Observable, take} from "rxjs";
import {AuthService} from "../../auth/auth.service";
import {Authentication} from "../../model/auth/authentication.model";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  /**
   * Constructor to create the instance
   * @param authService
   */
  constructor(private authService: AuthService) { }

  /**
   * Intercept method that intercepts all the http requests that are made to the server
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.loggedInUser.pipe(
      take(1),
      exhaustMap((authentication: Authentication | null) => {
        if(authentication){
          let authToken: string = authentication.authToken;
          let bearerToken: string = `Bearer ${authToken}`
          req = req.clone({
            setHeaders: {
              Authorization: bearerToken
            }
          });
        }
        return next.handle(req);
      })
    );
  }
}
