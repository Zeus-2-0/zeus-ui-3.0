import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TradingPartnerService} from "../../../../services/feature/trading-partner.service";
import {NgForm} from "@angular/forms";
import {TradingPartnerMatchParams} from "../../../../model/feature/trading-partner-match-params.model";

@Component({
  selector: 'zeus-trading-partner-cockpit',
  templateUrl: './trading-partner-cockpit.component.html',
  styleUrls: ['./trading-partner-cockpit.component.css']
})
export class TradingPartnerCockpitComponent implements OnInit {

  /**
   * The instance of the trading partner search form
   */
  @ViewChild('tpSearchForm') tpSearchForm !: NgForm;

  /**
   * Constructor for the trading partner cockpit component
   * @param router
   * @param route
   */
  constructor(private router: Router,
              private route: ActivatedRoute,
              private tpService: TradingPartnerService) { }

  /**
   * The ngOnInit life cycle method
   */
  ngOnInit(): void {
  }

  /**
   * This method is invoked when the user clicks the "SEARCH" button in the UI
   */
  onSearch(): void {
    let tpSearchParams : TradingPartnerMatchParams = new TradingPartnerMatchParams(this.tpSearchForm.value.tpId,
      this.tpSearchForm.value.state, null, null, null)
    this.tpService.searchTradingPartner(tpSearchParams);
  }

  /**
   * Add a new trading partner
   */
  addTP(): void {
    this.router.navigate(['../new'], {relativeTo: this.route});
  }

}
