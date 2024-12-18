import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from "../../../../../../services/feature/account.service";
import {MemberAddress} from "../../../../../../model/feature/account/member-address.model";

@Component({
  selector: 'zeus-member-address-detail',
  templateUrl: './member-address-detail.component.html',
  styleUrls: ['./member-address-detail.component.css']
})
export class MemberAddressDetailComponent implements OnInit {

  /**
   * The address code of the address
   */
  @Input("addressCode")
  addressCode !: string | undefined | null;

  memberAddress !: MemberAddress | null

  /**
   * Constructor for the address component
   */
  constructor(private accountService: AccountService) { }

  /**
   * ngOnInit life cycle method
   */
  ngOnInit(): void {

    // console.log("Member address code is:", this.addressCode)
    if(this.addressCode != undefined){
      // console.log("Address code is not null")
      // Get the address associated with the address code
      this.memberAddress = this.accountService.getMemberAddress(this.addressCode);
      //console.log("member address is:", this.memberAddress)
    }

  }

}
