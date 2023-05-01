/**
 * This is the authentication model object that is returned by the server
 * once the user is authenticated.
 */
import {User} from "./user.model";

export class Authentication{

  /**
   * Indicates id the user was authenticated or not
   */
  authenticated !: boolean;

  /**
   * Authentication message returned from the server
   */
  authMessage !: string;

  /**
   * Authorization token that can be used for further requests
   */
  authToken !: string;

  /**
   * Expiration date of the auth token
   */
  authExpiration !: string;

  /**
   * The user object model with all the roles and authorities
   */
  userDto !: User

  /**
   * The constructor that constructs the authentication object
   * @param authenticated
   * @param authToken
   * @param authMessage
   * @param authExpiration
   * @param subject
   */
  constructor(authenticated : boolean,
              authToken : string,
              authMessage : string,
              authExpiration : string,
              subject : User) {
    this.authenticated = authenticated;
    this.authToken = authToken;
    this.authMessage = authMessage;
    this.authExpiration = authExpiration;
    this.userDto = subject;
  }

}
