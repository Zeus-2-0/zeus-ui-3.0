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
  exports:[
    TransactionComponent,
    TransactionEditComponent,
    TransactionSearchComponent,
    TransactionCockpitComponent,
    TransactionResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
