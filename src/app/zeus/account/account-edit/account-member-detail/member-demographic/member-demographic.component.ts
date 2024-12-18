import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Member} from "../../../../../model/feature/account/member.model";
import {AccountService} from "../../../../../services/feature/account.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'zeus-member-demographic',
  templateUrl: './member-demographic.component.html',
  styleUrls: ['./member-demographic.component.css']
})
export class MemberDemographicComponent implements OnInit, OnDestroy {

  /**
   * Identifies the member who is active
   */
  activeMemberSubscription : Subscription = new Subscription();

  /**
   * Active member whose details is being displayed in the UI
   */
  activeMember !: Member | null;

  /**
   * Constructor of the member demographics component
   * @param accountService
   */
  constructor(private accountService: AccountService) { }

  /**
   * ngOnInit life cycle method
   */
  ngOnInit(): void {
    // console.log("Member demo component is initialized")
    if(this.accountService.activeMember != null){
      this.activeMember = this.accountService.activeMember
    }
    // Create a subscription to be notified with the active member is updated
    this.activeMemberSubscription = this.accountService.activeMemberSubject.subscribe({
      next: value => {
        //console.log("The active member in the demographic:", value)
        // this.activeMemberCode = value;
        //console.log("The active member after user clicked the card:", value)
        // Get the details of the member from the account service
        this.activeMember = this.accountService.getMemberDetail(value);
      },
      error: err => {},
      complete: () => {}
    })
  }

  /**
   * ngOnDestroy life cycle method
   */
  ngOnDestroy(): void {
    // Unsubscribe from any active subscriptions
    // console.log("Member demo component is destroyed")
    this.activeMemberSubscription.unsubscribe();
  }

}
