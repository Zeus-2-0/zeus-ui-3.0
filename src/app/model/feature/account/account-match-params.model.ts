export class AccountMatchParams{

  /**
   * Account number that is being searched
   */
  accountNumber !: string | null | undefined;

  /**
   * The states from which the account are searched
   */
  stateTypeCode !: string | null | undefined;

  /**
   * Constructor to the account match param
   * @param accountNumber
   * @param stateTypeCode
   */
  constructor(accountNumber: string,
              stateTypeCode: string) {
    this.accountNumber = accountNumber;
    this.stateTypeCode = stateTypeCode;
  }
}
