import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCockpitComponent } from './account-cockpit.component';

describe('AccountCockpitComponent', () => {
  let component: AccountCockpitComponent;
  let fixture: ComponentFixture<AccountCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
