import { Component, OnInit } from '@angular/core';
import {TradingPartner} from "../../../../model/feature/trading-partner.model";

@Component({
  selector: 'zeus-trading-partner-results',
  templateUrl: './trading-partner-results.component.html',
  styleUrls: ['./trading-partner-results.component.css']
})
export class TradingPartnerResultsComponent implements OnInit {

  tradingPartners : TradingPartner[] = [
    new TradingPartner('123', 'test name 1',
      'test desc 1', 'send 1', 'receiver 1', 'lob 1', 'bu 1',
      'mp 1', 'st 1'),
    new TradingPartner('124', 'test name 2',
      'test desc 2', 'send 2', 'receiver 2', 'lob 2', 'bu 2',
      'mp 2', 'st 2'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(tradingPartnerId: string): void{
    console.log("User selected tp id:", tradingPartnerId);
  }

}
