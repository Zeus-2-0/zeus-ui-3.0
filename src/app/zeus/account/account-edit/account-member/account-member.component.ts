import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {AccountService} from "../../../../services/feature/account.service";
import {Member} from "../../../../model/feature/account/member.model";

@Component({
  selector: 'zeus-account-member',
  templateUrl: './account-member.component.html',
  styleUrls: ['./account-member.component.css']
})
export class AccountMemberComponent implements OnInit, OnDestroy {

  /**
   * Member code of the member displayed in the card
   */
  @Input("memberCode")
  memberCode !: string

  /**
   * The member detail of the member that is displayed
   */
  memberDetail !: Member | null;

  /**
   * Identifies if the member is active or not, so that the color
   * of the card can be updated
   */
  isMemberActive : boolean = false

  /**
   * Subscription for active member
   */
  activeMemberSubscription : Subscription = new Subscription();

  /**
   * Constructor for the account member card component
   * @param accountService
   */
  constructor(private accountService: AccountService) { }

  /**
   * ngOnInit life cycle method
   */
  ngOnInit(): void {
    // console.log("Inside ngOnInit of member card component (account-member)", this.accountService.primarySubscriberCode)
    // Get the detail of the active member from the account service
    this.memberDetail = this.accountService.getMemberDetail(this.memberCode);
    // console.log("The member detail:", this.memberDetail)
    // Note: This member card component is initialized for each member in the account
    // If the member code of this member card is the member who is currently actively
    // viewed by the user then -- set the member active to TRUE
    if(this.memberCode == this.accountService.activeMember?.memberCode){
      // Set the isMemberActive to true so that the respective member card can be
      // identified in a distinctive color
      this.isMemberActive = true;
    }
    // Set up an active member subscription from account service so that when the
    // active member is updated, the subscription will be notified and the member active
    // will be set to true
    this.activeMemberSubscription = this.accountService.activeMemberSubject.subscribe({
      next: value => {
        //console.log("The active member in the card:", value)
        // If the value emitted by the subject is equal to the member code of this component
        // the set the member active value to true
        this.isMemberActive = this.memberCode == value;
      },
      error: err => {
        console.log("Inside error")
      },
      complete: () => {
        console.log("Inside complete")
      }
    })
  }

  onMemberSelect(){
    // Set the member active flag to true - so that the card color can be updated
    this.isMemberActive = true
    // Update the active member in the account service as the user selects different member cards
    this.accountService.setActiveMember(this.memberCode);
  }

  /**
   * Unsubscribe to all subscriptions
   */
  ngOnDestroy(): void {
    // Remove the active member subscription
    this.activeMemberSubscription.unsubscribe();
  }

}
