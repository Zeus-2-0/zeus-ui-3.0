/**
 * Authority object model contains the permission
 */
export class Authority{

  /**
   * The permission assigned to the authority
   */
  permission !: string;

  /**
   * Constructor to create the authority
   * @param permission
   */
  constructor(permission: string) {
    this.permission = permission;
  }

}
