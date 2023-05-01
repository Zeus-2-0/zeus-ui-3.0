/**
 * The Zeus API response wrapper object that contains the response of the API calls.
 */
export class ZeusApiResponse<T>{

  /**
   * Contains the response from the respective API call
   */
  response !: T;

  /**
   * The integer value of the status
   */
  statusCode !: number;

  /**
   * The HTTP status of the request
   */
  status !: string;

  /**
   * The reason if the request was unsuccessful
   */
  reason !: string;

  /**
   * The message that can be used to display to the user
   */
  message !: string;

  /**
   * A message that the development team can understand
   */
  developerMessage !: string;

  /**
   * The date and time when the response was created
   */
  timestamp !: Date;

  /**
   * The constructor for the api response
   * @param response
   * @param statusCode
   * @param status
   * @param reason
   * @param message
   * @param developerMessage
   * @param timestamp
   */
  constructor(response : T,
              statusCode: number,
              status : string,
              reason : string,
              message : string,
              developerMessage : string,
              timestamp : Date) {
    this.response = response;
    this. statusCode = statusCode;
    this.status = status;
    this.reason = reason;
    this.message = message;
    this.developerMessage = developerMessage;
    this.timestamp = timestamp;
  }
}
