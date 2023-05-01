import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {AuthService} from "./auth.service";
import {Authentication} from "../model/auth/authentication.model";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router) { }

  /**
   * Can activate method
   * @param route
   * @param state
   */
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.loggedInUser.pipe(
      take(1),
      map((authentication:Authentication | null) => {
      const isAuth = !!authentication;
      if(isAuth){
        return true;
      }
      return this.router.createUrlTree(['/login']);
    }));
  }
}
