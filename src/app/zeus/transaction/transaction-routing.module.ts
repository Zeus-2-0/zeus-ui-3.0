import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {AuthGuardService} from "../../auth/auth-guard.service";
import {TransactionComponent} from "./transaction.component";
import {TransactionSearchComponent} from "./transaction-search/transaction-search.component";
import {TransactionEditComponent} from "./transaction-edit/transaction-edit.component";

const routes: Routes = [
  { path: 'zeus/transaction', component: TransactionComponent, canActivate:[AuthGuardService], children:[
      { path: 'search', component: TransactionSearchComponent},
      // { path: 'new', component: TransactionEditComponent},
      { path: ':id', component: TransactionEditComponent}
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
export class TransactionRoutingModule { }
