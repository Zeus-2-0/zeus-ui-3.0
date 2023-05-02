import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {ZeusComponent} from "./zeus.component";
import {AuthGuardService} from "../auth/auth-guard.service";
import {TradingPartnerComponent} from "./trading-partner/trading-partner.component";
import {TradingPartnerSearchComponent} from "./trading-partner/trading-partner-search/trading-partner-search.component";
import {TradingPartnerEditComponent} from "./trading-partner/trading-partner-edit/trading-partner-edit.component";

const routes: Routes = [
  // The user will navigate to the portal landing page
  { path: 'zeus', component: ZeusComponent, canActivate: [AuthGuardService], children:[
      // { path: 'trading-partner', component: TradingPartnerComponent, children:[
      //     { path: 'search', component: TradingPartnerSearchComponent},
      //     { path: 'new', component: TradingPartnerEditComponent},
      //     { path: ':id', component: TradingPartnerEditComponent}
      //   ]
      // }
    ]
  }
];

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
export class ZeusRoutingModule { }
