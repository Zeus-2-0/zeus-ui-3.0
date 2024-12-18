import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../../../../services/feature/account.service";
import {Member} from "../../../../../model/feature/account/member.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'zeus-member-address',
  templateUrl: './member-address.component.html',
  styleUrls: ['./member-address.component.css']
})
export class MemberAddressComponent implements OnInit, OnDestroy {

  /**
   * Identifies the member who is active
   */
  activeMemberSubscription : Subscription = new Subscription();

  /**
   * Active member whose details is being displayed in the UI
   */
  activeMember !: Member | null;

  /**
   * Constructor for the member address component
   */
  constructor(private accountService: AccountService) { }

  /**
   * ngOnInit life cycle method
   */
  ngOnInit(): void {
    // console.log("Inside the member address component")
    if(this.accountService.activeMember != null){
      // console.log("There is an active member in the service")
      this.activeMember = this.accountService.activeMember;
      // console.log("The active member object is:", this.activeMember)
    }

    // Create a subscription to be notified with the active member is updated
    this.activeMemberSubscription = this.accountService.activeMemberSubject.subscribe({
      next: value => {
        console.log("The active member in the member address:", value)
        // this.activeMemberCode = value;
        //console.log("The active member after user clicked the card:", value)
        // Get the details of the member from the account service
        this.activeMember = this.accountService.getMemberDetail(value);
        // the addresses of the active member will be displayed in the UI
      },
      error: err => {},
      complete: () => {}
    })
  }

  /**
   * ngOnDestroy life cycle method
   */
  ngOnDestroy(): void {
    console.log("member address component destroyed")
    this.activeMemberSubscription.unsubscribe();
  }

}
