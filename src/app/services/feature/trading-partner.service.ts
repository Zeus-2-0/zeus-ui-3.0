import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ZeusApiResponse} from "../../model/api/zeus-api-response.model";
import {TradingPartnerList} from "../../model/feature/trading-partner-list.model";
import {TradingPartner} from "../../model/feature/trading-partner.model";
import {TradingPartnerMatchParams} from "../../model/feature/trading-partner-match-params.model";
import {Observable, Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TradingPartnerService {

  /**
   * The subject is to inform other parts of the module when the user clicks on the search button
   */
  tpSearch : Subject<TradingPartnerMatchParams> = new Subject<TradingPartnerMatchParams>();

  /**
   * Constructor of the service
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Call the backend API to retrieve all the trading partners
   */
  getAllTradingPartners() : Observable<ZeusApiResponse<TradingPartnerList>>{
    console.log("Inside get all trading partners method");
    return this.http.get<ZeusApiResponse<TradingPartnerList>>('http://localhost:8088/api/v1/zeus/tp')
  }

  /**
   * Call the backend API to retrieve the trading partner by id
   * @param tradingPartnerId
   */
  getTradingPartnerById(tradingPartnerId: string) : Observable<ZeusApiResponse<TradingPartner>>{
    console.log("Inside get trading partner by id:",tradingPartnerId)
    return this.http.get<ZeusApiResponse<TradingPartner>>(`http://localhost:8088/api/v1/zeus/tp/${tradingPartnerId}`);
  }

  /**
   * This method is invoked from the trading partner search cockpit component when the
   * user clicks the search button.
   * It emits the next value along with the trading partner match params so that the
   * subscriber (this will be the trading partner result component) of this subject can take the
   * appropriate action
   * @param tpSearchParams
   */
  searchTradingPartner(tpSearchParams: TradingPartnerMatchParams): void{
    console.log("Trading Partner Search parameters:", tpSearchParams);
    this.tpSearch.next(tpSearchParams);
  }

  /**
   * This is the method that is called by the trading partner search results component
   * This methods call the appropriate method depending on whether the serach parameters where
   * passed or not
   * @param tpSearchParams
   */
  getTradingPartner(tpSearchParams: TradingPartnerMatchParams | null) : Observable<ZeusApiResponse<TradingPartnerList>>{
    console.log("inside getTradingPartner method:", tpSearchParams);
    if(tpSearchParams === null){
      /**
       * If no parameters are passed in then call getAllTradingPartners method
       */
      return this.getAllTradingPartners();
    }else {
      /**
       * If search parameters are passed then call get all the trading partners
       * that match the search parameters
       */
      return this.getTradingPartnerBySearchParams(tpSearchParams);
    }
  }

  /**
   * Calls the backend API to retrieve the trading partner by the search parameters passed in the user
   * @param tpSearchParams
   */
  getTradingPartnerBySearchParams(tpSearchParams: TradingPartnerMatchParams) : Observable<ZeusApiResponse<TradingPartnerList>>{
    let searchParams = new HttpParams();
    console.log("trading partner id:", tpSearchParams.tradingPartnerId);
    // let tpId:string | null | undefined = tpSearchParams.tradingPartnerId;
    // // @ts-ignore
    // searchParams = searchParams.append('tradingPartnerId', tpId);
    searchParams = this.setSearchParams('tradingPartnerId', tpSearchParams.tradingPartnerId, searchParams)
    console.log("search params:",searchParams);
    //return this.http.get<ZeusApiResponse<TradingPartnerList>>(`http://localhost:8088/api/v1/zeus/tp/search?tradingPartnerId=${tradingPartnerId}`)
    return this.http.get<ZeusApiResponse<TradingPartnerList>>('http://localhost:8088/api/v1/zeus/tp/search',
      {
        params: searchParams
      })
  }

  /**
   * Set the trading partner search parameters
   * @param parameter
   * @param parameterValue
   * @param searchParams
   */
  setSearchParams(parameter: string, parameterValue: string | null | undefined, searchParams: HttpParams): HttpParams{
    if(parameterValue != null || parameterValue != undefined){
      searchParams = searchParams.append(parameter, parameterValue);
    }
    return searchParams;
  }

  /**
   * Calls the create trading partner API to create a new trading partner
   * @param tradingPartnerDto
   */
  createTradingPartner(tradingPartnerDto: TradingPartner): Observable<ZeusApiResponse<TradingPartner>> {
    return this.http.post<ZeusApiResponse<TradingPartner>>("http://localhost:8088/api/v1/zeus/tp", tradingPartnerDto)
  }

  /**
   * Calls the update trading partner API to create a new trading partner
   * @param tradingPartnerDto
   * @param tradingPartnerSK
   */
  updateTradingPartner(tradingPartnerDto: TradingPartner, tradingPartnerSK: string): Observable<any> {
    return this.http.put("http://localhost:8088/api/v1/zeus/tp/"+tradingPartnerSK, tradingPartnerDto)
  }
}
