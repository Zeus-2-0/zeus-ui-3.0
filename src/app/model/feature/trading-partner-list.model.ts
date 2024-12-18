import {TradingPartner} from "./trading-partner.model";

export class TradingPartnerList{

  /**
   * The list of trading partners
   */
  tradingPartnerDtos !: TradingPartner[];

  /**
   * The constructor for the trading partner list
   */
  constructor(tradingPartnerDtos: TradingPartner[]) {
    this.tradingPartnerDtos = tradingPartnerDtos;
  }

  /**
   * Return the list of trading partners
   */
  public getTradingPartnerList(){
    return this.tradingPartnerDtos.slice();
  }
}
