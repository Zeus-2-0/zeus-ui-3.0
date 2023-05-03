import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {FormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  /** There is no need to export the above declared components since these components are not used by other modules
   *  Components that are declared in a module need to be exported only if those components are re-used by other modules
   **/
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
