import {PremiumSpan} from "./premium-span.model";

export class EnrollmentSpan {

  enrollmentSpanSK !: string;

  enrollmentSpanCode !: string;

  stateTypeCode !: string;

  marketplaceTypeCode !: string;

  businessUnitTypeCode !: string;

  planId !: string;

  groupPolicyId !: string;

  startDate !: Date;

  endDate !: Date;

  statusTypeCode !: string;

  exchangeSubscriberId !: string;

  effectuationDate !: Date;

  premiumSpans !: PremiumSpan[]
}
