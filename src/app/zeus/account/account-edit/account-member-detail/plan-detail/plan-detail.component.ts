import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../../../services/feature/account.service";
import {EnrollmentSpan} from "../../../../../model/feature/account/enrollment-span.model";

@Component({
  selector: 'zeus-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {

  enrollmentSpans !: EnrollmentSpan[] | null;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    console.log("Inside plan detail component")
    let tempEnrollmentSpans : EnrollmentSpan[] | null = this.accountService.getEnrollmentSpans();
    this.enrollmentSpans = tempEnrollmentSpans;
    console.log("Enrollment Spans:", tempEnrollmentSpans)
    console.log("Actual Enrollment Spans:", this.enrollmentSpans)
    console.log("Inside the plan detail component. Updating the member info active flag to false")
    this.accountService.setMemberInfoActive(false);
  }

}
