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



@NgModule({
  declarations: [
    ZeusComponent,
    TradingPartnerComponent,
    TradingPartnerSearchComponent,
    TradingPartnerCockpitComponent,
    TradingPartnerResultsComponent,
    TradingPartnerEditComponent
  ],
  exports:[
    ZeusComponent,
    TradingPartnerComponent,
    TradingPartnerSearchComponent,
    TradingPartnerCockpitComponent,
    TradingPartnerResultsComponent,
    TradingPartnerEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ]
})
export class ZeusModule { }
