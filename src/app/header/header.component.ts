import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";
import {User} from "../model/auth/user.model";
import {Authentication} from "../model/auth/authentication.model";

@Component({
  selector: 'zeus-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  /**
   * Subscription to the authentication service,to know if a user has logged in or not
   */
  authSubscription !: Subscription;

  /**
   * Indicates if a user has logged in or not
   */
  userLoggedIn: boolean = false;

  /**
   * Constructor for the component
   */
  constructor(private authService: AuthService,
              private router: Router) { }

  /**
   * ngOnInit life cycle method
   */
  ngOnInit(): void {
    // Subscription to check if the user has logged in
    this.authSubscription = this.authService.loggedInUser.subscribe({
      next: (authentication: Authentication | null) => {
        console.log("User object:", authentication);
        if(authentication?.authenticated){
          this.userLoggedIn = true;
        }else{
          this.userLoggedIn = false;
        }
      }
    });
  }

  /**
   * This method is invoked when the user clicks login on the header
   */
  onLogin(): void{
    // this.authService.login();
    this.router.navigate(['/login'])
  }

  /**
   * This method is invoked when the user clicks logout
   */
  onLogout(): void{
    this.authService.logout();
  }

  /**
   * ngOnDestroy life cycle method
   */
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
