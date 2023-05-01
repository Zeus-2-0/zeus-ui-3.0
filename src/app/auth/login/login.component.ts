import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginRequest} from "../../model/auth/login-request.model";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";
import {ZeusApiResponse} from "../../model/api/zeus-api-response.model";
import {Authentication} from "../../model/auth/authentication.model";
import {Router} from "@angular/router";

@Component({
  selector: 'zeus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * The instance of the login form
   */
  @ViewChild('loginForm') loginForm !: NgForm;

  /**
   * The login error message
   */
  loginErrorMessage !: string | null | undefined;

  /**
   * The constructor of the component
   */
  constructor(private authService: AuthService,
              private router: Router) { }

  /**
   * The ngOnInit lifecycle method
   */
  ngOnInit(): void {
  }

  /**
   * This method is invoked when the user clicks the sign-in button in the template
   */
  onLogin(): void{
    if(this.loginErrorMessage){
      // if there was login error message present prior to login request received
      // clear the error message before submitting the login request
      // This may happen if the user provided the incorrect credentials the first time
      // and is then trying to sign-in again
      this.loginErrorMessage = undefined;
    }
    console.log(this.loginForm.value.username);
    // Retrieve the user credentials
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    // Create the login request object
    let loginRequest: LoginRequest = new LoginRequest(username, password);
    let authObservable !: Observable<ZeusApiResponse<Authentication>> | Observable<any> | Observable<never>;
    // Authenticate the user using the auth service
    authObservable = this.authService.jwtAuthentication( loginRequest);
    authObservable.subscribe({
      next: value => {
        console.log(value);
        this.router.navigate(['/zeus']);
      },
      error: err => {
        console.log(err);
        this.loginErrorMessage = err;
      },
      complete: () => {

      }
    });
  }

}
