import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ZeusComponent} from "./zeus/zeus.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuardService} from "./auth/auth-guard.service";

const routes: Routes = [
  // Load the home page when the user is at the home url http://localhost:9090
  { path: '', component: HomeComponent},
  // Load the login component when the user ties to sign-in to the portal
  { path: 'login', component:LoginComponent},
  // The user will navigate to the portal landing page
  { path: 'zeus', component: ZeusComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
