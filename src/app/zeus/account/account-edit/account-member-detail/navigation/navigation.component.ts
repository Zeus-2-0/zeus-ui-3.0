import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../../../services/feature/account.service";

@Component({
  selector: 'zeus-member-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onMemberInfoSelect(): void{
    console.log("Clicked member info tab");
    this.accountService.setMemberInfoActive(true);
  }

}
