import {Account} from "./account.model";

export class AccountList{

  /**
   * The list of accounts
   */
  accountDtos !: Account[]

  /**
   * Constructor of the account list model
   * @param accountDtos
   */
  constructor(accountDtos: Account[]) {
    this.accountDtos = accountDtos;
  }
}
