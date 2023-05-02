import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ZeusComponent } from './zeus/zeus.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./services/http/http-interceptor.service";
import { TradingPartnerComponent } from './trading-partner/trading-partner.component';
import { TradingPartnerSearchComponent } from './trading-partner/trading-partner-search/trading-partner-search.component';
import { TradingPartnerCockpitComponent } from './trading-partner/trading-partner-search/trading-partner-cockpit/trading-partner-cockpit.component';
import { TradingPartnerResultsComponent } from './trading-partner/trading-partner-search/trading-partner-results/trading-partner-results.component';
import { TradingPartnerEditComponent } from './trading-partner/trading-partner-edit/trading-partner-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ZeusComponent,
    LoginComponent,
    LogoutComponent,
    TradingPartnerComponent,
    TradingPartnerSearchComponent,
    TradingPartnerCockpitComponent,
    TradingPartnerResultsComponent,
    TradingPartnerEditComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
