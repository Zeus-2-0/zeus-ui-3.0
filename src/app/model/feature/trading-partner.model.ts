export class TradingPartner{
  /**
   * Trading partner id of the trading partner
   */
  tradingPartnerId!: string;

  /**
   * Name of the trading partner
   */
  tradingPartnerName!: string;

  /**
   * Short description of the trading partner
   */
  description!: string;

  /**
   * Sender id associated with the trading partner
   */
  senderId!: string;

  /**
   * Receiver id associated with the trading partner
   */
  receiverId!: string;

  /**
   * Line of business type code associated with the trading partner
   */
  lineOfBusinessTypeCode!: string;

  /**
   * Business type code associated with the trading partner
   */
  businessUnitTypeCode!: string;

  /**
   * Marketplace type code associated with the trading partner
   */
  marketplaceTypeCode!: string;

  /**
   * State type code associated with the trading partner
   */
  stateTypeCode!: string;

  /**
   * Trading partner constructor
   * @param tradingPartnerId
   * @param tradingPartnerName
   * @param description
   * @param senderId
   * @param receiverId
   * @param lineOfBusinessTypeCode
   * @param businessUnitTypeCode
   * @param marketplaceTypeCode
   * @param stateTypeCode
   */
  constructor(tradingPartnerId: string,
              tradingPartnerName: string,
              description: string,
              senderId: string,
              receiverId: string,
              lineOfBusinessTypeCode: string,
              businessUnitTypeCode: string,
              marketplaceTypeCode: string,
              stateTypeCode: string) {
    this.tradingPartnerId = tradingPartnerId;
    this.tradingPartnerName = tradingPartnerName;
    this.description = description;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.lineOfBusinessTypeCode = lineOfBusinessTypeCode;
    this.businessUnitTypeCode = businessUnitTypeCode;
    this.marketplaceTypeCode = marketplaceTypeCode;
    this.stateTypeCode = stateTypeCode;
  }

}
