import {MemberAddress} from "./member-address.model";

export class Member{

  /**
   * Primary key of the member in MMS
   */
  memberSK !: string | null;

  /**
   * The unique code for the member in the system
   */
  memberCode !: string;

  /**
   * First name of the member
   */
  firstName !: string;

  /**
   * Last name of the member
   */
  lastName !: string;

  /**
   * The relationship type code of the member
   */
  relationshipTypeCode !: string;

  /**
   * The date of birth of the member
   */
  dateOfBirth !: Date;

  /**
   * Gender type code of the member
   */
  genderTypeCode !: string

  /**
   * Height of the member
   */
  height !: number;

  /**
   * Weight of the member
   */
  weight !: number;

  /**
   * Addresses associated with the member
   */
  memberAddresses !: MemberAddress[];

  constructor(memberSK : string | null,
              memberCode : string,
              memberFirstName : string,
              memberLastName : string) {

    this.memberSK = memberSK;
    this.memberCode = memberCode;
    this.firstName = memberFirstName;
    this.lastName = memberLastName;
  }

}
