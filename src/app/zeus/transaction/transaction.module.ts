import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import {FormsModule} from "@angular/forms";
import { TransactionComponent } from './transaction.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { TransactionSearchComponent } from './transaction-search/transaction-search.component';
import { TransactionCockpitComponent } from './transaction-search/transaction-cockpit/transaction-cockpit.component';
import { TransactionResultsComponent } from './transaction-search/transaction-results/transaction-results.component';



@NgModule({
  declarations: [
    TransactionComponent,
    TransactionEditComponent,
    TransactionSearchComponent,
    TransactionCockpitComponent,
    TransactionResultsComponent
  ],
  /** There is no need to export the above declared components since these components are not used by other modules
   *  Components that are declared in a module need to be exported only if those components are re-used by other modules
   **/
  // exports:[
  //   TransactionComponent,
  //   TransactionEditComponent,
  //   TransactionSearchComponent,
  //   TransactionCockpitComponent,
  //   TransactionResultsComponent
  // ],
  imports: [
    CommonModule,
    FormsModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
