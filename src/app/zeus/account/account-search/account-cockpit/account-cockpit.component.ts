import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../../../services/feature/account.service";
import {AccountMatchParams} from "../../../../model/feature/account/account-match-params.model";

@Component({
  selector: 'zeus-account-cockpit',
  templateUrl: './account-cockpit.component.html',
  styleUrls: ['./account-cockpit.component.css']
})
export class AccountCockpitComponent implements OnInit {

  /**
   * The instance of the account search form
   */
  @ViewChild('accountSearchForm') accountSearchForm !: NgForm;

  /**
   * Constructor of the account cockpit component
   * @param router
   * @param route
   * @param accountService
   */
  constructor(private router: Router,
              private route: ActivatedRoute,
              private accountService: AccountService) { }

  /**
   * ngOnInit lifecycle method
   */
  ngOnInit(): void {
  }

  /**
   * The method invoked when the user clicks the search button.
   */
  onSearch(): void{
    let accountMatchParams: AccountMatchParams = new AccountMatchParams(
      this.accountSearchForm.value.accountNumber,
      this.accountSearchForm.value.state
    )
    this.accountService.searchTradingPartner(accountMatchParams);
  }

}
