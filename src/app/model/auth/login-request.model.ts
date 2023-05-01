/**
 * This is the object model for login request
 */
export class LoginRequest{

  /**
   * The username of the user requesting for login
   */
  username !: string;

  /**
   * The password of the user requesting for login
   */
  password !: string;

  /**
   * Initialize the properties in the constructor
   * @param username
   * @param password
   */
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

}
