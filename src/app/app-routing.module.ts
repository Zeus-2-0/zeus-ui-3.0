import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ZeusComponent} from "./zeus/zeus.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {TradingPartnerComponent} from "./zeus/trading-partner/trading-partner.component";
import {
  TradingPartnerSearchComponent
} from "./zeus/trading-partner/trading-partner-search/trading-partner-search.component";
import {TradingPartnerEditComponent} from "./zeus/trading-partner/trading-partner-edit/trading-partner-edit.component";

const routes: Routes = [
  // Load the home page when the user is at the home url http://localhost:9090
  { path: '', component: HomeComponent},
  // Load the login component when the user ties to sign-in to the portal
  { path: 'login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
