import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {Subscription} from "rxjs";
import {User} from "./model/auth/user.model";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'zeus-ui-3.0';

  /**
   * Constructor of the App Component
   */
  constructor(private authService: AuthService) {
  }



  /**
   * ngOnInit lifecycle hook
   */
  ngOnInit(): void {
    this.authService.autoLogin();
    console.log("API URL:", environment.apiUrl)
  }

  /**
   * ngOnDestroy lifecycle hook
   */
  ngOnDestroy(): void {
  }
}
