import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AccountMatchParams} from "../../model/feature/account/account-match-params.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ZeusApiResponse} from "../../model/api/zeus-api-response.model";
import {AccountList} from "../../model/feature/account/account-list.model";
import {Account} from "../../model/feature/account/account.model";
import {TradingPartner} from "../../model/feature/trading-partner.model";
import {Member} from "../../model/feature/account/member.model";
import {EnrollmentSpan} from "../../model/feature/account/enrollment-span.model";
import {MemberAddress} from "../../model/feature/account/member-address.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  /**
   * The subject is to inform other parts of the module when the user clicks on the search button
   */
  accountSearch : Subject<AccountMatchParams> = new Subject<AccountMatchParams>();

  /**
   * The subject that indicates the active member in the detail screen
   */
  activeMemberSubject : Subject<string> = new Subject<string>();

  /**
   * Holds the member code of the primary subscriber in the account
   */
  primarySubscriberCode !: string;

  /**
   * Indicates the member who is currently active in the detail screen
   */
  activeMember !: Member | null;

  /**
   * Holds the account that is currently active in the Account UI
   */
  activeAccount !: Account | null | undefined;

  /**
   * This subject indicates if the member information tab in the member detail tab is active or not
   * A boolean value (True or False) will be emitted as and when the user moves into or away from
   * member info object.
   */
  memberInfoActiveSubject : Subject<boolean> = new Subject<boolean>();

  /**
   * The list of members associated with the account
   */
  members !: Member[];


  /**
   * Constructor of the account service
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Get all the accounts in the system
   */
  getAllAccounts(): Observable<ZeusApiResponse<AccountList>>{
    console.log("Inside get all accounts method");
    return this.http.get<ZeusApiResponse<AccountList>>('http://localhost:8088/api/v1/zeus/account')
  }

  /**
   * This method is invoked from the account search cockpit component when the
   * user clicks the search button.
   * It emits the next value along with the account match params so that the
   * subscriber (this will be the account result component) of this subject can take the
   * appropriate action
   * @param accountMatchParams
   */
  searchTradingPartner(accountMatchParams: AccountMatchParams): void{
    console.log("Account Match parameters:", accountMatchParams);
    this.accountSearch.next(accountMatchParams);
  }

  /**
   * This is the method that is called by the account search results component
   * This methods call the appropriate method depending on whether the search parameters where
   * passed or not
   * @param accountMatchParams
   */
  getAccount(accountMatchParams : AccountMatchParams | null):Observable<ZeusApiResponse<AccountList>>{
    /**
     * If no parameters are passed in then call getAllAccounts method
     */
    if(accountMatchParams == null){
      return this.getAllAccounts();
    }else{
      /**
       * If search parameters are passed then call get all the accounts
       * that match the search parameters
       */
      return this.getAccountByMatchParams(accountMatchParams);
    }

  }

  /**
   * Calls the backend API to retrieve the account by the match parameters passed in the user
   * @param accountMatchParams
   */
  getAccountByMatchParams(accountMatchParams : AccountMatchParams):Observable<ZeusApiResponse<AccountList>>{
    let matchParams: HttpParams = new HttpParams();
    matchParams = this.setSearchParams('accountNumber', accountMatchParams.accountNumber, matchParams)
    return this.http.get<ZeusApiResponse<AccountList>>('http://localhost:8088/api/v1/zeus/account/search',
      {
        params: matchParams
      })
  }

  /**
   * Set the trading partner search parameters
   * @param parameter
   * @param parameterValue
   * @param searchParams
   */
  setSearchParams(parameter: string, parameterValue: string | null | undefined, searchParams: HttpParams): HttpParams{
    if(parameterValue != null || parameterValue != undefined){
      searchParams = searchParams.append(parameter, parameterValue);
    }
    return searchParams;
  }

  /**
   * Call backend API to get the account by account number
   * @param accountNumber
   */
  getAccountByAccountNumber(accountNumber: string): Observable<ZeusApiResponse<AccountList>>{
    console.log("Inside get account number by account number:",accountNumber)
    return this.http.get<ZeusApiResponse<AccountList>>(`http://localhost:8088/api/v1/zeus/account/${accountNumber}`);
  }

  /**
   * Set the active member in the UI
   * @param memberCode
   */
  setActiveMember(memberCode: string){
    // console.log("The active member code is:", memberCode);
    // Set the active member in the service, so that the methods in this service can use the active member
    this.activeMember = this.getMemberDetail(memberCode);
    // Emit the active member code so that components subscribed to this event will know that the active member has been
    // updated
    this.activeMemberSubject.next(memberCode);
  }

  /**
   * Set the account that is currently active
   * @param account
   */
  setAccount(account: Account | undefined | null){
    this.activeAccount = account;
  }

  /**
   * Remove the active account from the service
   */
  removeActiveAccount(){
    this.activeAccount = null;
  }

  /**
   * Return the enrollment spans associated with the account
   */
  getEnrollmentSpans(): EnrollmentSpan[] | null{
    if(this.activeAccount != null){
      return this.activeAccount.enrollmentSpans;
    }else{
      return null;
    }
  }

  /**
   * Get the detail of the member
   * @param memberCode
   */
  getMemberDetail(memberCode: string): Member | null{
    for (var member of this.members){
      if(member.memberCode == memberCode){
        return member;
      }
    }
    return null;
  }

  /**
   * Emit the boolean value to indicate if the member information tab is active or not
   * @param isActive
   */
  setMemberInfoActive(isActive:boolean){
    this.memberInfoActiveSubject.next(isActive);
  }

  /**
   * get the member address
   * @param memberAddressCode
   */
  getMemberAddress(memberAddressCode: string) : MemberAddress | null{
    console.log("Inside get member address method, address code is:", memberAddressCode)
    const memberAddresses : MemberAddress[] | undefined = this.activeMember?.memberAddresses;
    let matchedAddress : MemberAddress | null = null
    console.log("Active member addresses:", memberAddresses)
    // @ts-ignore
    memberAddresses.forEach(memberAddress => {
      //console.log("Member address code:", memberAddress.memberAddressCode)
      //console.log("Address Code passed in input:", memberAddressCode)
      if(memberAddress.memberAddressCode === memberAddressCode){
        console.log("Address matched")
        matchedAddress = memberAddress
      }
    })
    console.log("Matched Address:", matchedAddress)
    return matchedAddress;
  }


}
