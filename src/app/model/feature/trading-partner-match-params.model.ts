export class TradingPartnerMatchParams {

  /**
   * Search trading partner by trading partner id
   */
  tradingPartnerId !: string | null | undefined;

  /**
   * Search trading partner by state
   */
  stateTypeCode !: string | null | undefined;

  /**
   * Search trading partner by marketplace type
   */
  marketplaceTypeCode !: string | null | undefined;

  /**
   * Search trading partner by business unit
   */
  businessUnitTypeCode !: string | null | undefined;

  /**
   * Search trading partner by line of business
   */
  lineOfBusinessTypeCode !: string | null | undefined;

  /**
   * Constructor for the class
   */
  constructor(tradingPartnerId: string | null | undefined,
              stateTypeCode: string | null | undefined,
              marketplaceTypeCode: string | null | undefined,
              businessUnitTypeCode: string | null | undefined,
              lineOfBusinessTypeCode: string | null | undefined) {
    this.tradingPartnerId = tradingPartnerId;
    this.stateTypeCode = stateTypeCode;
    this.marketplaceTypeCode = marketplaceTypeCode;
    this.businessUnitTypeCode = businessUnitTypeCode;
    this.lineOfBusinessTypeCode = lineOfBusinessTypeCode;
  }
}
