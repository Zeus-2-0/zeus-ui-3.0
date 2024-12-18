import { Component, OnInit } from '@angular/core';
import {Account} from "../../../../model/feature/account/account.model";
import {Subscription} from "rxjs";
import {AccountService} from "../../../../services/feature/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountMatchParams} from "../../../../model/feature/account/account-match-params.model";

@Component({
  selector: 'zeus-account-results',
  templateUrl: './account-results.component.html',
  styleUrls: ['./account-results.component.css']
})
export class AccountResultsComponent implements OnInit {

  /**
   * The accounts array that is displayed in the ui
   */
  accounts !: Account[];

  /**
   * The subscription for the account service
   */
  accountServiceSubscription : Subscription = new Subscription();

  /**
   * This is a subscription for this component to know when the user clicked the search button in the
   * account search cockpit
   */
  accountSearchSubscription : Subscription = new Subscription();

  /**
   * Constructor of the account results component
   * @param accountService
   * @param router
   * @param route
   */
  constructor(private accountService: AccountService,
              private router: Router,
              private route: ActivatedRoute) { }

  /**
   * ngOnInit life cycle method
   */
  ngOnInit(): void {
    /**
     * When the component is first loaded all the accounts are loaded.
     * To get all the accounts NULL is passed to this method so
     * that all the accounts are returned.
     */
    this.accountServiceSubscription = this.getAccountServiceSubscription(null);
  }

  /**
   * This method is invoked when the user selects the account from the results.
   * @param accountNumber
   */
  onSelect(accountNumber: string | null | undefined){
    console.log("Account selected:", accountNumber)
    // The current active route is zeus/account/search
    // By doing ../ we go one path back and appending the account number
    // so the path will be "zeus/account"
    // if we have to give the direct path without relative to the command for navigate will be "zeus/account",
    // instead of "../" and should remove the relativeTo
    this.router.navigate(['../', accountNumber], {relativeTo: this.route});
  }

  /**
   * This method takes in the account match parameters and calls the
   * account service to get the accounts by those parameters
   * @param accountMatchParams
   */
  getAccountServiceSubscription(accountMatchParams: AccountMatchParams | null): Subscription {
    console.log("Inside get Account service subscription:", accountMatchParams);
    return this.accountService.getAccount(accountMatchParams).subscribe({
      next: value => {
        console.log("Value from api ", value);
        /**
         * Populate the account array with the account list returned from the service
         */
        const accountList : Account[] = value.response.accountDtos;
        /**
         * Set the data source with the data received from the account list
         */
        console.log("Account list:", accountList)
        this.accounts = accountList;
      },
      error: err => {},
      complete: () => {
        console.log("Inside complete");
      }
    })
  }

}
