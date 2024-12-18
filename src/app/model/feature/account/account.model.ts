import {Member} from "./member.model";
import {EnrollmentSpan} from "./enrollment-span.model";

export class Account{

  /**
   * The primary of the account in MMS
   */
  accountSK !: string | null | undefined;

  /**
   * The account number of the account
   */
  accountNumber !: string;

  /**
   * The line of business of the account
   */
  lineOfBusinessTypeCode !: string;

  /**
   * List of members associated with the account
   */
  members !: Member[]

  /**
   * Enrollment Spans associated with the account
   */
  enrollmentSpans !: EnrollmentSpan[]
}
