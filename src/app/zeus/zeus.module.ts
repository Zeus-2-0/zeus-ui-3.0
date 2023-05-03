import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ZeusComponent} from "./zeus.component";
import {TradingPartnerComponent} from "./trading-partner/trading-partner.component";
import {TradingPartnerSearchComponent} from "./trading-partner/trading-partner-search/trading-partner-search.component";
import {
  TradingPartnerCockpitComponent
} from "./trading-partner/trading-partner-search/trading-partner-cockpit/trading-partner-cockpit.component";
import {TradingPartnerEditComponent} from "./trading-partner/trading-partner-edit/trading-partner-edit.component";
import {
  TradingPartnerResultsComponent
} from "./trading-partner/trading-partner-search/trading-partner-results/trading-partner-results.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ZeusRoutingModule} from "./zeus-routing.module";
import {TradingPartnerModule} from "./trading-partner/trading-partner.module";
import {AccountModule} from "./account/account.module";
import { TransactionModule } from './transaction/transaction.module';



@NgModule({
  declarations: [
    ZeusComponent
  ],
  /** There is no need to export the above declared components since these components are not used by other modules
   *  Components that are declared in a module need to be exported only if those components are re-used by other modules
   **/
  // exports:[
  //   ZeusComponent
  // ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ZeusRoutingModule,
    TradingPartnerModule,
    AccountModule,
    TransactionModule
  ]
})
export class ZeusModule { }
