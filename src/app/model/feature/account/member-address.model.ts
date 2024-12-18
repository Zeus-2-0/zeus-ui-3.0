export class MemberAddress{

  /**
   * The primary key of the address in MMS
   */
  memberAddressSK !: string;

  /**
   * Unique code assigned to the address in MMS
   */
  memberAddressCode !: string;

  /**
   * The type of address
   */
  addressTypeCode !: string;

  /**
   * The address line 1 of the address
   */
  addressLine1 !: string;

  /**
   * The address line 2 of the address
   */
  addressLine2 !: string;

  /**
   * The city of the address
   */
  city !: string;

  /**
   * The state type code of the address
   */
  stateTypeCode !: string;

  /**
   * The zip code of the address
   */
  zipCode !: string;

  /**
   * The start date of the address
   */
  startDate !: Date;

  /**
   * The end date of the address
   */
  endDate !: Date;

}
