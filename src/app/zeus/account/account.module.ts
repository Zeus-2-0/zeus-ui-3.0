import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountSearchComponent } from './account-search/account-search.component';
import {FormsModule} from "@angular/forms";
import {AccountRoutingModule} from "./account-routing.module";
import { AccountCockpitComponent } from './account-search/account-cockpit/account-cockpit.component';
import { AccountResultsComponent } from './account-search/account-results/account-results.component';
import { AccountEditComponent } from './account-edit/account-edit.component';




@NgModule({
  declarations: [
    AccountComponent,
    AccountSearchComponent,
    AccountCockpitComponent,
    AccountResultsComponent,
    AccountEditComponent
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
