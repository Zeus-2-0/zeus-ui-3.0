import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InternalListTypes} from "../../model/feature/internal-list-types.model";
import {ZeusApiResponse} from "../../model/api/zeus-api-response.model";
import {REF_DATA_API_URL} from "../../constants/zeus-api-urls.contants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RefDataService {

  /**
   * Constructor for the service
   * @param http HttpClient parameter
   */
  constructor(private http: HttpClient) { }

  /**
   * Call the back end API to retrieve the internal list codes for all the list type provided
   * @param internalListTypes
   */
  getInternalRefDataForListTypes(internalListTypes: InternalListTypes) : Observable<ZeusApiResponse<InternalListTypes>>{
    return this.http.post<ZeusApiResponse<InternalListTypes>>(
      REF_DATA_API_URL+'internal/list-types', internalListTypes
    )
  }
}
