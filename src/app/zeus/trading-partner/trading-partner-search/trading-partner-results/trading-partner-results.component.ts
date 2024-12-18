import {Component, OnDestroy, OnInit} from '@angular/core';
import {TradingPartner} from "../../../../model/feature/trading-partner.model";
import {TradingPartnerService} from "../../../../services/feature/trading-partner.service";
import {TradingPartnerList} from "../../../../model/feature/trading-partner-list.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {TradingPartnerMatchParams} from "../../../../model/feature/trading-partner-match-params.model";
import {ZeusApiResponse} from "../../../../model/api/zeus-api-response.model";

@Component({
  selector: 'zeus-trading-partner-results',
  templateUrl: './trading-partner-results.component.html',
  styleUrls: ['./trading-partner-results.component.css']
})
export class TradingPartnerResultsComponent implements OnInit, OnDestroy {

  /**
   * The trading partner array that is displayed in the ui
   */
  tradingPartners !: TradingPartner[];

  /**
   * This is a subscription to the trading partner service
   */
  tpServiceSubscription : Subscription = new Subscription()

  /**
   * This is a subscription for this component to know when the user clicked the search button in the
   * trading partner search cockpit
   */
  tpSearchSubscription: Subscription = new Subscription();

  /**
   * Constructor of the trading partner search result component
   * @param tpService
   * @param router
   * @param route
   */
  constructor(private tpService: TradingPartnerService,
              private router: Router,
              private route: ActivatedRoute) { }

  /**
   * ngOnInit initializing the component
   */
  ngOnInit(): void {

    /**
     * When the component is first loaded all the trading partners are loaded.
     * To get all the trading partners NULL is passed to this method so
     * that all the trading partners are returned.
     */
    this.tpServiceSubscription = this.getTpServiceSubscription(null);

    /**
     * This subscription is created so that it will be invoked with the user clicks on the search button
     */
    this.tpSearchSubscription = this.tpService.tpSearch.subscribe({
      next: data =>{
        /**
         * When the user clicked the search button the trading partner parameters that were entered is passed in
         */
        this.tpServiceSubscription = this.getTpServiceSubscription(data);
      },
      error: err => {
        // TODO add some error handling mechanism
      },
      complete: () => {}
    });

    // this.tpService.getAllTradingPartners().subscribe({
    //   next: value => {
    //     console.log("The api response:", value)
    //     let tradingPartnerList: TradingPartnerList = value.response;
    //     this.tradingPartners = tradingPartnerList.tradingPartnerDtos
    //   },
    //   error: err => {},
    //   complete: () => {}
    // });
  }

  onSelect(tradingPartnerId: string): void{
    console.log("User selected tp id:", tradingPartnerId);
    // The current active route is zeus/trading-partner/search
    // By doing ../ we go one path back and appending the trading partner id
    // so the path will be "zeus/trading-partner"
    // if we have to give the direct path without relative to the command for navigate will be "zeus/trading-partner",
    // instead of "../" and should remove the relativeTo
    this.router.navigate(['../', tradingPartnerId], {relativeTo: this.route});
  }

  /**
   * This method takes in the trading partner search parameters and calls the
   * trading partner service to get the trading partner by those parameters
   * @param tpSearchParams
   * @private
   */
  private getTpServiceSubscription(tpSearchParams: TradingPartnerMatchParams | null) : Subscription  {
    console.log("Inside get TP service subscription:", tpSearchParams);
    return this.tpService.getTradingPartner(tpSearchParams).subscribe({
      next: data => {
        console.log("Trading Partners:", data)
        /**
         * Populate the trading partner array with the trading partner list returned from the service
         */
        const tradingPartnerList: TradingPartner[] = data.response.tradingPartnerDtos;
        /**
         * Set the data source with the data received from the trading partner list
         */
        console.log("Trading Partner list:", tradingPartnerList)
        this.tradingPartners = tradingPartnerList;
      },
      error: err => {
        // TODO add code to handle errors
      },
      complete: () => {
        console.log("Inside complete");
      }
    });
  }

  /**
   * The ngOnDestroy life cycle method
   */
  ngOnDestroy(): void {
    this.tpSearchSubscription.unsubscribe();
    this.tpServiceSubscription.unsubscribe();
  }

}
