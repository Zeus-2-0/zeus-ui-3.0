import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMemberComponent } from './account-member.component';

describe('AccountMemberComponent', () => {
  let component: AccountMemberComponent;
  let fixture: ComponentFixture<AccountMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
