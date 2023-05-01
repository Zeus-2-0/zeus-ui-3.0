/**
 * Object model for the user entity
 */
import {Role} from "./role.model";

export class User{

  /**
   * The username of the user
   */
  username !: string;

  /**
   * The password of the user
   */
  password !: string;

  /**
   * The roles that are assigned to the user
   */
  roleDtos !: Role[];

  /**
   * Constructor that creates the user
   * @param username
   * @param password
   * @param roleDtos
   */
  constructor(username: string,
              password: string,
              roleDtos: Role[]) {
    this.username = username;
    this.password = password;
    this.roleDtos = roleDtos;
  }
}
