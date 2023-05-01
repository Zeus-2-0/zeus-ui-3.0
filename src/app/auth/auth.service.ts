import {EventEmitter, Injectable} from '@angular/core';
import {LoginRequest} from "../model/auth/login-request.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ZeusApiResponse} from "../model/api/zeus-api-response.model";
import {Authentication} from "../model/auth/authentication.model";
import {BehaviorSubject, catchError, map, Observable, Subject, tap, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * The user that is logged in
   */
  loggedInUser : BehaviorSubject<Authentication | null> = new BehaviorSubject<Authentication | null>(null);

  /**
   * Timer for checking the if the user token is expired
   * @private
   */
  private tokenExpirationTimer: any;

  /**
   * The constructor of the auth service
   * @param http
   */
  constructor(private http: HttpClient,
              private router: Router) { }

  /**
   * Authenticate the user using Jwt Authentication
   */
  jwtAuthentication(loginRequest:LoginRequest): Observable<ZeusApiResponse<Authentication>> | Observable<any> | Observable<never>{
    return this.http.post<ZeusApiResponse<Authentication>>(`http://localhost:8088/zeus/jwt/authenticate`,loginRequest)
      .pipe(tap(apiResponse => this.handleAuthentication(apiResponse, loginRequest)),
            catchError(this.handleError))
  }

  /**
   * Method to handle the error responses from the server
   * @param errorResponse
   * @private
   */
  private handleError(errorResponse: HttpErrorResponse): Observable<any> {
    console.log(errorResponse);
    let errorMessage = 'Invalid username or password';
    if(!errorResponse.error || !errorResponse.error.response || !errorResponse.error.response.exceptions){
      return throwError(() => errorMessage);
    }
    errorMessage = errorResponse.error.response.exceptions[0].exceptionMessage;
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }

  /**
   * Store the user credentials in session storage to be used for subsequent API calls
   * @param apiResponse
   * @param loginRequest
   * @private
   */
  private handleAuthentication(apiResponse: ZeusApiResponse<Authentication>,
                               loginRequest: LoginRequest) : ZeusApiResponse<Authentication>{
    console.log("Authentication Response Data:", apiResponse);
    // If the user was authenticated successfully, get the username and auth token and store it in
    // local storage, so that it can be sent in the header for subsequent requests
    localStorage.setItem('authenticatedUser', loginRequest.username);
    localStorage.setItem('authToken', `Bearer ${apiResponse.response.authToken}`);
    localStorage.setItem('authData', JSON.stringify(apiResponse.response))
    // Get the logged-in user details
    let authentication: Authentication = apiResponse.response;

    // set the user in the subject for the application to know about the user who is authenticated
    console.log("About to emit the authentication object:", authentication);
    this.loggedInUser.next(authentication);
    const expiryDate = new Date(+authentication.authExpiration[0], +authentication.authExpiration[1]-1, +authentication.authExpiration[2],
                                +authentication.authExpiration[3], +authentication.authExpiration[4], +authentication.authExpiration[5]);
    console.log("Expiry date:",expiryDate);
    const expirationDuration = new Date(expiryDate).getTime() - new Date().getTime();
    this.autoLogout(expirationDuration);
    return apiResponse;
  }

  /**
   * Auto login the user when the page refreshes
   */
  autoLogin(): void {
    // @ts-ignore
    const authData:Authentication | null = JSON.parse(localStorage.getItem('authData'));
    if(authData){
      this.loggedInUser.next(authData);
      const expiryDate = new Date(+authData.authExpiration[0], +authData.authExpiration[1]-1, +authData.authExpiration[2],
        +authData.authExpiration[3], +authData.authExpiration[4], +authData.authExpiration[5]);
      const expirationDuration = new Date(expiryDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }else{
      return;
    }
  }

  /**
   * Timer to auto logout the user
   * @param expirationDuration
   */
  autoLogout(expirationDuration: number): void {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  /**
   * Logout the user
   */
  logout(){
    this.loggedInUser.next(null);
    localStorage.removeItem('authData');
    localStorage.removeItem('authenticatedUser');
    localStorage.removeItem('authToken');
    if(this.tokenExpirationTimer){
      clearInterval(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.router.navigate(['/login']);
  }
}
