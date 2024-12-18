import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TradingPartnerService} from "../../../services/feature/trading-partner.service";
import {Subscription} from "rxjs";
import {TradingPartner} from "../../../model/feature/trading-partner.model";
import {NgForm} from "@angular/forms";
import {InternalListCode} from "../../../model/feature/internal-list-code.model";
import {InternalListTypes} from "../../../model/feature/internal-list-types.model";
import {InternalListType} from "../../../model/feature/internal-list-type.model";
import {
  BUSINESS_UNIT_LIST_TYPE,
  LOB_LIST_TYPE,
  MKTPLACE_LIST_TYPE,
  STATE_LIST_TYPE
} from "../../../constants/zeus.constants";
import {RefDataService} from "../../../services/shared/ref-data.service";

@Component({
  selector: 'zeus-trading-partner-edit',
  templateUrl: './trading-partner-edit.component.html',
  styleUrls: ['./trading-partner-edit.component.css']
})
export class TradingPartnerEditComponent implements OnInit, OnDestroy {

  /**
   * Contains the list of all marketplace types
   */
  marketplaceTypes : InternalListCode[] = []

  /**
   * Contains the list of all lob types
   */
  lobTypes : InternalListCode[] = []

  /**
   * Contains the list of all state types
   */
  stateTypes : InternalListCode[] = []

  /**
   * Contains the list of all business units
   */
  businessUnitTypes : InternalListCode[] = []

  /**
   * The list of all internal lists that are needed for this UI
   */
  internalListTypes: InternalListType[] = [
    new InternalListType(null, LOB_LIST_TYPE, null, []),
    new InternalListType(null, MKTPLACE_LIST_TYPE, null, []),
    new InternalListType(null, STATE_LIST_TYPE, null, []),
    new InternalListType(null, BUSINESS_UNIT_LIST_TYPE, null, [])
  ]

  /**
   * The internal list types for which the codes internal codes are needed
   */
  internalList : InternalListTypes = new InternalListTypes(this.internalListTypes);

  /**
   * Indicates if the form is in edit mode or read only mode
   */
  isEditMode : boolean = false;
  /**
   * The instance of the trading partner form in the template
   */
  @ViewChild('tpForm') tpForm !: NgForm;

  /**
   * The trading partner id for which the detail is being displayed
   */
  tradingPartnerId !: string | null | undefined;

  /**
   * The trading partner sk for which the detail is being displayed
   */
  tradingPartnerSK !: string | null | undefined;

  /**
   * The trading partner that is being displayed
   */
  tradingPartner !: TradingPartner;

  /**
   * The parameter subscription to capture the trading partner id
   */
  tpParamSubscription : Subscription = new Subscription();

  /**
   * The trading partner service subscription
   */
  tpServiceSubscription : Subscription = new Subscription();

  /**
   * Constructor for the trading partner component
   */
  constructor(private route: ActivatedRoute,
              private tpService: TradingPartnerService,
              private refDataService: RefDataService) { }

  /**
   * The life cycle method that is called when initializing the component
   */
  ngOnInit(): void {
    this.populateRefData();
    // Get trading partner id from the route params if present
    this.tpParamSubscription = this.route.params.subscribe({
      next: value => {
        this.tradingPartnerId = value["tradingPartnerId"];
      }
    });
    console.log("Trading Partner Id:" , this.tradingPartnerId)
    if(this.tradingPartnerId != null || this.tradingPartnerId != undefined){
      this.tpServiceSubscription = this.tpService.getTradingPartnerById(this.tradingPartnerId).subscribe({
        next: value => {
          console.log("The response from API:", value);
          this.tradingPartner = value.response;
          console.log("The trading partner SK:", this.tradingPartner.tradingPartnerSK);
          this.tradingPartnerSK = this.tradingPartner.tradingPartnerSK;
          this.tpForm.setValue({
            tpId: this.tradingPartner.tradingPartnerId,
            senderId: this.tradingPartner.senderId,
            receiverId: this.tradingPartner.receiverId,
            tpName: this.tradingPartner.name,
            state: this.tradingPartner.stateTypeCode,
            lob: this.tradingPartner.lineOfBusinessTypeCode,
            businessUnit: this.tradingPartner.businessUnitTypeCode,
            marketplace: this.tradingPartner.marketplaceTypeCode,
            description: this.tradingPartner.description
          })
          this.isEditMode = false;
        },
        error: err => {console.log("Error occurred:", err)},
        complete: () => {}
      });
    }else{
      this.isEditMode = true;
      console.log("Inside else:", this.marketplaceTypes)
    }
  }

  /**
   * Populate the reference data lists from db
   */
  populateRefData(): void{
    this.refDataService.getInternalRefDataForListTypes(this.internalList).subscribe({
      next: value => {
        console.log("The lob type:", value)
        let retrievedListTypes: InternalListTypes = value.response
        console.log("Retrieved list types:", retrievedListTypes)
        let retrievedInternalListTypes: InternalListType[] = retrievedListTypes.internalListTypes
        retrievedInternalListTypes.forEach( listType => {
          console.log("List type:", listType.internalListTypeName)
          let listName: string = listType.internalListTypeName
          switch (listName){
            case "LineOfBusiness":
              this.lobTypes = listType.internalRefDataList
              break;
            case "Marketplace":
              this.marketplaceTypes = listType.internalRefDataList
              break;
            case "State":
              this.stateTypes = listType.internalRefDataList
              break;
            case "BusinessUnit":
              this.businessUnitTypes = listType.internalRefDataList;
              break;
          }
        })
      },
      error: err => {

      },
       complete: () => {
        console.log("Inside the complete")
        let defaultSelection: InternalListCode = new InternalListCode("----Select----", "select", "select", "select")
        this.marketplaceTypes.unshift(defaultSelection);
        this.lobTypes.unshift(defaultSelection);
        this.stateTypes.unshift(defaultSelection);
        this.businessUnitTypes.unshift(defaultSelection);
        this.tpForm.setValue({
          tpId: "",
          senderId: "",
          receiverId: "",
          tpName: "",
          state: this.stateTypes[0].listCode,
          lob: this.lobTypes[0].listCode,
          businessUnit: this.businessUnitTypes[0].listCode,
          marketplace: this.marketplaceTypes[0].listCode,
          description: ""
        })
       }
    })
  }

  /**
   * On submitting the changes or adding a new trading partner
   */
  onSubmit(): void{
    console.log("On submit of the trading partner");
    console.log("Trading Partner id:", this.tpForm.value.tpId);
    let tpId: string = this.tpForm.value.tpId;
    let tpName: string = this.tpForm.value.tpName;
    let senderId: string = this.tpForm.value.senderId;
    let receiverId: string = this.tpForm.value.receiverId;
    let stateTypeCode: string = this.tpForm.value.state;
    let lobTypeCode : string = this.tpForm.value.lob;
    let businessUnitTypeCode : string = this.tpForm.value.businessUnit;
    let marketplaceTypeCode: string = this.tpForm.value.marketplace;
    let description: string = this.tpForm.value.description;
    let tp: TradingPartner = new TradingPartner(tpId,
      tpName,
      description,
      senderId,
      receiverId,
      lobTypeCode,
      businessUnitTypeCode,
      marketplaceTypeCode,
      stateTypeCode);
    if(this.tradingPartnerSK != null || this.tradingPartnerSK != undefined){
      console.log("This is an existing trading partner - Update is needed")
      this.tpService.updateTradingPartner(tp, this.tradingPartnerSK).subscribe({
        next: value => {
          console.log("Update trading partner completed")
        },
        error: err => {
          console.log("Inside error")
        },
        complete: () => {
          console.log("Inside complete")
        }
      })
    }else{
      console.log("This is a new trading partner - Create is needed")
      this.tpService.createTradingPartner(tp).subscribe({
        next: value => {
          console.log("TP Create API Response:", value)
        },
        error: err => {},
        complete: () => {}
      })
    }
  }

  /**
   * The life cycle method that is called when the component is destroyed
   */
  ngOnDestroy(): void {
    // Unsubscribe from the subscriptions
    this.tpParamSubscription.unsubscribe();
    this.tpServiceSubscription.unsubscribe();
  }

  /**
   * The user wants to edit the trading partner
   */
  onEdit(): void{
    this.isEditMode = true;
  }

  /**
   * The user cancels the edit
   */
  onCancelEdit(): void {
    this.isEditMode = false;
  }

}
