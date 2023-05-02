import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TradingPartnerComponent} from "./trading-partner.component";
import {TradingPartnerSearchComponent} from "./trading-partner-search/trading-partner-search.component";
import {
  TradingPartnerCockpitComponent
} from "./trading-partner-search/trading-partner-cockpit/trading-partner-cockpit.component";
import {
  TradingPartnerResultsComponent
} from "./trading-partner-search/trading-partner-results/trading-partner-results.component";
import {TradingPartnerEditComponent} from "./trading-partner-edit/trading-partner-edit.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TradingPartnerRoutingModule} from "./trading-partner-routing.module";



@NgModule({
  declarations: [
    TradingPartnerComponent,
    TradingPartnerSearchComponent,
    TradingPartnerCockpitComponent,
    TradingPartnerResultsComponent,
    TradingPartnerEditComponent
  ],
  exports:[
    TradingPartnerComponent,
    TradingPartnerSearchComponent,
    TradingPartnerCockpitComponent,
    TradingPartnerResultsComponent,
    TradingPartnerEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    TradingPartnerRoutingModule
  ]
})
export class TradingPartnerModule { }
