import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../../../services/feature/account.service";
import {Subscription} from "rxjs";
import {Member} from "../../../../model/feature/account/member.model";

@Component({
  selector: 'zeus-account-member-detail',
  templateUrl: './account-member-detail.component.html',
  styleUrls: ['./account-member-detail.component.css']
})
export class AccountMemberDetailComponent implements OnInit, OnDestroy {

  /**
   * The active member code will be passed in from the edit screen
   * So when this component is initialized it will know the member who needs
   * to be displayed in the UI
   */
  @Input("activeMemberCode")
  activeMemberCode !: string;

  /**
   * The member detail of the member that is displayed
   */
  activeMemberDetail !: Member | null;

  /**
   * Identifies the member who is active
   */
  activeMemberSubscription : Subscription = new Subscription();

  /**
   * Boolean field indicating that the "Info" tab in the UI is active or not
   */
  infoActive !: boolean;

  /**
   * Subscription to know when the "Info" tab is clicked by the user
   */
  infoActiveSubscription : Subscription = new Subscription();

  /**
   * Constructor for the member detail component
   * @param accountService
   */
  constructor(private accountService: AccountService) { }

  /**
   * ngOnInit life cycle method
   */
  ngOnInit(): void {
    // console.log("The active member while initializing is:", this.activeMemberCode)
    // console.log("Member info active flag:", this.accountService.memberInfoActive);
    // Subscribe to active member subject from the account service
    // So that this component will know when the user changes to another member in the UI
    this.activeMemberSubscription = this.accountService.activeMemberSubject.subscribe({
      next: value => {
        // console.log("The active member in the detail:", value)
        // The Subject will emit the member code of the member that the user selected
        this.activeMemberCode = value;
        //console.log("The active member after user clicked the card:", this.activeMemberCode)
        // Get the member details to be displayed from the account service
        this.activeMemberDetail = this.accountService.getMemberDetail(this.activeMemberCode);
      },
      error: err => {},
      complete: () => {}
    })

    // Indicates that the member info tab is active when the component is initialized
    this.infoActive = true;
    // Create a subscription on the info tab being activated using the subject from the account service
    this.infoActiveSubscription = this.accountService.memberInfoActiveSubject.subscribe({
      next: value => {
        // console.log("Member Info active or not:", value);
        // The subject from the account service will return "True" if the user selected the info tab
        // It will return "False" if the user selected away from the info tab
        this.infoActive = value;
      },
      error: err => {},
      complete: () => {}
    })
  }

  /**
   * Unsubscribe to all subscriptions
   */
  ngOnDestroy(): void {
    // Unsubscribe from all active user created subscriptions
    this.activeMemberSubscription.unsubscribe();
    this.infoActiveSubscription.unsubscribe();
  }

}
