/**
 * Object model for the Role
 */
import {Authority} from "./authority.model";

export class Role{

  /**
   * The name of the role
   */
  roleName !: string;

  /**
   * The list of authorities that are assigned to the role
   */
  authorityDtos !: Authority[];

  /**
   * Constructor to create the role object
   * @param roleName
   * @param authorityDtos
   */
  constructor(roleName: string,
              authorityDtos: Authority[]) {
    this.roleName = roleName;
    this.authorityDtos = authorityDtos;
  }
}
