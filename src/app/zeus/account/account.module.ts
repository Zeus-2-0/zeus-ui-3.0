import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountSearchComponent } from './account-search/account-search.component';
import {FormsModule} from "@angular/forms";
import {AccountRoutingModule} from "./account-routing.module";
import { AccountCockpitComponent } from './account-search/account-cockpit/account-cockpit.component';
import { AccountResultsComponent } from './account-search/account-results/account-results.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountMemberComponent } from './account-edit/account-member/account-member.component';
import { AccountMemberDetailComponent } from './account-edit/account-member-detail/account-member-detail.component';
import { PlanDetailComponent } from './account-edit/account-member-detail/plan-detail/plan-detail.component';
import { NavigationComponent } from './account-edit/account-member-detail/navigation/navigation.component';
import { MemberDemographicComponent } from './account-edit/account-member-detail/member-demographic/member-demographic.component';
import { MemberAddressComponent } from './account-edit/account-member-detail/member-address/member-address.component';
import { MemberIdentifierComponent } from './account-edit/account-member-detail/member-identifier/member-identifier.component';
import { MemberAddressDetailComponent } from './account-edit/account-member-detail/member-address/member-address-detail/member-address-detail.component';




@NgModule({
  declarations: [
    AccountComponent,
    AccountSearchComponent,
    AccountCockpitComponent,
    AccountResultsComponent,
    AccountEditComponent,
    AccountMemberComponent,
    AccountMemberDetailComponent,
    PlanDetailComponent,
    NavigationComponent,
    MemberDemographicComponent,
    MemberAddressComponent,
    MemberIdentifierComponent,
    MemberAddressDetailComponent
  ],
  /** There is no need to export the above declared components since these components are not used by other modules
   *  Components that are declared in a module need to be exported only if those components are re-used by other modules
   **/
  // exports:[
  //   AccountComponent,
  //   AccountSearchComponent,
  //   AccountCockpitComponent,
  //   AccountResultsComponent,
  //   AccountEditComponent
  // ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
