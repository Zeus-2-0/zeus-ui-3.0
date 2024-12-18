import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TradingPartnerComponent} from "./trading-partner.component";
import {TradingPartnerSearchComponent} from "./trading-partner-search/trading-partner-search.component";
import {TradingPartnerEditComponent} from "./trading-partner-edit/trading-partner-edit.component";
import {AuthGuardService} from "../../auth/auth-guard.service";

const routes: Routes = [
  { path: 'zeus/trading-partner', component: TradingPartnerComponent, canActivate:[AuthGuardService], children:[
      { path: 'search', component: TradingPartnerSearchComponent},
      { path: 'new', component: TradingPartnerEditComponent},
      { path: ':tradingPartnerId', component: TradingPartnerEditComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class TradingPartnerRoutingModule { }
