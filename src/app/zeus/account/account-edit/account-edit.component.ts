import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Member} from "../../../model/feature/account/member.model";
import {AccountService} from "../../../services/feature/account.service";
import {Subscription} from "rxjs";
import {AccountList} from "../../../model/feature/account/account-list.model";
import {Account} from "../../../model/feature/account/account.model";

@Component({
  selector: 'zeus-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit, OnDestroy {

  /**
   * The account number of the account that is being displayed to the user
   */
  accountNumber !: string

  /**
   * The list of members associated with the account
   */
  members !: Member[]



  /**
   * The member code of the primary subscriber in the account
   */
  primarySubscriberCode !: string;

  /**
   * The subscription for the account service
   */
  accountServiceSubscription : Subscription = new Subscription();



  /**
   * Constructor for the account edit component
   * @param route
   * @param accountService
   */
  constructor(private route: ActivatedRoute,
              private accountService: AccountService) {

  }

  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy(): void {
    // Unsubscribe all user created subscriptions
        this.accountServiceSubscription.unsubscribe();
        this.accountService.removeActiveAccount();
    }

  /**
   * ngOnInit life cycle method
   */
  ngOnInit(): void {
    // Get account number from the route params if present
    this.route.params.subscribe({
      next: value => {
        this.accountNumber = value["accountNumber"];
      }
    });
    // Retrieve the account details using the account number
    this.accountServiceSubscription = this.accountService.getAccountByAccountNumber(this.accountNumber).subscribe({
      next: value => {
        console.log("Account returned from the API:", value)
        this.getMemberAccounts(value.response);

      },
      error: err => {},
      complete: () => {}
    })

  }

  /**
   * Get all members in the account
   * @param accountList
   */
  getMemberAccounts(accountList : AccountList){
    // Retrieve the account [] from the data returned from the API
    let accounts : Account[] = accountList.accountDtos;
    // Retrieve the first account from the array.
    // This is done because there can be only one account per account number
    let account: Account | undefined = accounts.pop();
    // Set the account in the account service, so that other components are aware
    // of the account that was retrieved
    this.accountService.setAccount(account)
    // If a valid account was retrieved then proceed to next steps
    if(account != undefined){
      // Get all the members from the account
      let members: Member[] = account.members
      // Among the members identify the member who is the primary subscriber (HOH)
      let primaryMember: Member | null = this.getPrimaryMember(members);
      // move the primary member to the top of the list so that
      // Primary subscriber will be displayed as the first card
      members = this.movePrimaryMemberToTop(members, primaryMember)
      // once the members are ordered set them in the local members array
      this.members = members;
      // console.log("Members:", this.members)
      // Set all the members in the account service
      // So that if other components need to be aware of the members in the account
      // they can get access to them
      this.accountService.members = members;
      // Primary member should always be present in the account, so the below
      // if condition should never fail unless the data is bad
      if(primaryMember != null){
        this.primarySubscriberCode = primaryMember.memberCode;
        // Set the primary member of the account in the account service so that other
        // child components will know which member is the primary subscriber
        this.accountService.primarySubscriberCode = primaryMember.memberCode;
        // When the member edit component is initialized primary information should be displayed
        // Hence the primary member is set as the active member
        this.accountService.activeMember = primaryMember;
        // This will generate emit a value that will indicate which member is currently active
        // In this case it is the primary subscriber
        this.accountService.setActiveMember(primaryMember.memberCode)
        // When the member edit component is initialized the member info tab will be active
        this.accountService.setMemberInfoActive(true);
      }

    }
  }

  /**
   * Get the primary member from list of members
   * @param members
   */
  getPrimaryMember(members: Member[]): Member | null{
    for (var member of members){
      // console.log("Member:", member.firstName);
      // console.log("Member Relationship:", member.relationshipTypeCode)
      // Check if the relationship type code of the member is 'HOH'
      // if yes then return that member
      if(member.relationshipTypeCode == 'HOH'){
        return member;
      }
    }
    return null;
  }

  /**
   * Move the primary member to the top of the array
   * @param members
   * @param primaryMember
   */
  movePrimaryMemberToTop(members: Member[], primaryMember: Member | null): Member[] {
    let index = 0;
    if(primaryMember != null){
      for (var member of members){
        // console.log("Index value:", index)
        // Check if the member code of the member in the loop is same as the primary member
        if (member.memberCode == primaryMember.memberCode){

          if(index == 0){
            // Primary subscriber is already the first member in the array
            return members;
          }
          // If the primary subscriber is not the first member in the array
          // then remove that primary member from the array
          members.splice(index, 1)
          // Break from the for loop as the primary subscriber is identified and removed from the array
          break;
        }
        // Increment the index to get the next member, if the current member is not the primary subscriber
        index = index + 1;
      }
      // Add the primary subscriber back to the top of the array
      members.unshift(primaryMember);
    }
    // Return the member array, this array should now have the primary subscriber as the first member.
    return members;
  }

}
