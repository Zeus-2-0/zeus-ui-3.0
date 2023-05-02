import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "../../auth/auth-guard.service";
import {AccountSearchComponent} from "./account-search/account-search.component";
import {AccountComponent} from "./account.component";
import {AccountEditComponent} from "./account-edit/account-edit.component";


const routes: Routes = [
  { path: 'zeus/account', component: AccountComponent, canActivate:[AuthGuardService], children:[
      { path: 'search', component: AccountSearchComponent},
      // { path: 'new', component: AccountEditComponent},
      { path: ':id', component: AccountEditComponent}
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
export class AccountRoutingModule { }
