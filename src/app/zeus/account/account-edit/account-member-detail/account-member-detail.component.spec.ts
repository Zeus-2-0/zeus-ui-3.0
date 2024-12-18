import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMemberDetailComponent } from './account-member-detail.component';

describe('AccountMemberDetailComponent', () => {
  let component: AccountMemberDetailComponent;
  let fixture: ComponentFixture<AccountMemberDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMemberDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
