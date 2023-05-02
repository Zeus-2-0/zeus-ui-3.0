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
  exports:[
    AccountComponent,
    AccountSearchComponent,
    AccountCockpitComponent,
    AccountResultsComponent,
    AccountEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
